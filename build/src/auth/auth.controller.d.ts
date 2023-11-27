import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        account: {
            email: string;
            hash: string;
        };
    }>;
    singin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
