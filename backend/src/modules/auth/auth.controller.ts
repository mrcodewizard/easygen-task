import { Controller, Get, Post, Put, Delete, Req, Res, Body } from '@nestjs/common';
import { Request, Response, response } from "express";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { AuthInterface, LoginInterface } from '../../interfaces/auth.interface';
import { loginSchema, singupSchema } from '../../validators/user.validator';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, 
    private readonly jwtService: JwtService) {
  }

  @Get("/login") 
  showLogin(): string {
    return this.authService.showLogin();
  }

  @Post("/login") 
  async submitLogin(@Body() user: LoginInterface, @Res({passthrough: true}) response: Response) {
    try {
      await loginSchema.validateAsync(user);
      const result = await this.authService.authenticate(user);
      const jwt = await this.jwtService.signAsync({id: result.email});
      response.cookie('jwt', jwt, { httpOnly: true});

      result.token = jwt;

      if(!result) {
        return {
          status: 404,
          msg: "Username or password is incorrect"
        };
      } else {
        return {
          status: 200,
          msg: "User loggedin successfully",
          user: result
        };
      }
    }
    catch(error) {
      console.error('Validation error:', error.details[0].message);
      return {
       status: 400,
       msg: `Error! ${error.details[0].message}`
      }
    }
  }

  @Post("/register")
  async register(@Body() user: AuthInterface, @Res({ passthrough: true}) response: Response) {
    try {
      await singupSchema.validateAsync(user);
      const result = await this.authService.register(user);
      
      if(!result) {
        return {
          status: 403,
          msg: "User seems to be already registered. Please login instead"
        };
      } else {
        /** use email to set session cookie */
        const jwt = await this.jwtService.signAsync({id: result.email});
        response.cookie('jwt', jwt, { httpOnly: true});
        result.token = jwt;

        return {
          status: 200,
          msg: "User registered successfully",
          user: result
        };
      }
    }
    catch(error) {
      if (error instanceof Error && error.name !== 'ValidationError') {
        console.error('Database error:', error.message);
        return {
          status: 400,
          msg: `Error! Unable to register user`
        }
      } else {
        console.error('Validation error:', error.details[0].message);
        return {
          status: 400,
          msg: `Error! ${error.details[0].message}`
        }
      }
    }
  }
}
