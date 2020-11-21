import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LoggingService {

  constructor() { }

  logStatusChange(serverName: string, status: string){
    console.log(`${serverName}'s status changed, new status: ${status}`);
  }

  logServerAdded(status: string){
    console.log(`New-Server-Account Created, status: ${status}`);
  }
}
