import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const match = document.cookie.match(/AUTH_KEY=([^;]+)/);
  const token = match ? match[1] : null;

  if (token) {
    req = req.clone({
      headers: req.headers.set('Authorization', token),
      withCredentials: true,
    });
  }
  return next(req);
};
