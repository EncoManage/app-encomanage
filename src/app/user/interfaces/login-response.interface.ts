export interface LoginResponse {
    message: string;
    user: {
      id: number;
      name: string;
      email: string;
      //password: string; 
    };
  }