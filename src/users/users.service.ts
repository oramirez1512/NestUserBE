import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}
@Injectable()
export class UsersService {
        async getUsersService() {
            return  await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());
            
        }
}
