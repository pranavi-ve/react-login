import {userService} from "../_services";

export function authHeader() {
    // return authorization header with jwt token
    let user = userService.currentUserValue;
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}