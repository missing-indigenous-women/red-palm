import express, { Application } from 'express'
import morgan from 'morgan'
import { indexRoutes } from './apis/index.route'
import { postRoute } from './apis/post/post.route'
import { appUserRoute } from './apis/appUser/appUser.route'
import { vehicleRoute } from './apis/vehicle/vehicle.route'
import {womanRoute} from './apis/woman/woman.route'
import {socialMediaRoute} from './apis/social-media/social-media.route'
import {SignInRouter} from "./apis/sign-in/sign-in.route";
import {SignOutRoute} from "./apis/sign-out/sign-out.route";
import SignupRoute from "./apis/sign-up/signup.route";


const session = require("express-session");
const MemoryStore = require('memorystore')(session);


// The following class creates the app and instantiates the server
export class App {
  app: Application;

  constructor (
    private port?: number | string
  ) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  // private method that sets the port for the sever, to one from index.route.ts, and external project.env file or defaults to 3000
  public settings () : void {
    this.app.set('port', this.port || process.env.PORT || 4200)
  }

  // private method to setting up the middleware to handle json responses, one for dev and one for prod
  private middlewares () :void {
    const sessionConfig  =  {
      store: new MemoryStore({
        checkPeriod: 100800
      }),
      secret:"secret",
      saveUninitialized: true,
      resave: true,
      maxAge: "3h"
    };

    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(session(sessionConfig));

  }

  // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
  private routes () :void {
    this.app.use('/apis', indexRoutes)
    this.app.use('/apis/post',postRoute)
    this.app.use('/apis/appUser',appUserRoute)
    this.app.use('/apis/vehicle',vehicleRoute)
    this.app.use('/apis/woman',womanRoute)
    this.app.use('/apis/socialMedia', socialMediaRoute)
    this.app.use('/apis/sign-in', SignInRouter);
    this.app.use("/apis/sign-out", SignOutRoute);
    this.app.use('/apis/sign-up', SignupRoute);


  }

  // starts the server and tells the terminal to post a message that the server is running and on what port
  public async listen (): Promise<void> {
    await this.app.listen(this.app.get('port'))
    console.log('Express application built successfully')
  }
}


