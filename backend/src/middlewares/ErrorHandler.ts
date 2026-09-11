import { ExpressErrorMiddlewareInterface, HttpError, Middleware,} from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

@Middleware({ type: "after" })
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
  error(
    error: unknown,
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    if (error instanceof AppError) {
      response.status(error.statusCode).json({
        error: {
          code: error.code,
          message: error.message,
          details: error.details ?? null,
        },
      });
      return;
    }

    if (error instanceof HttpError) {
      response.status(error.httpCode).json({
        error: {
          code: "HTTP_ERROR",
          message: error.message,
          details: null,
        },
      });
      return;
    }

    console.error(error);

    response.status(500).json({
      error: {
        code: "INTERNAL_ERROR",
        message: "Ocorreu um erro interno no servidor.",
        details: null,
      },
    });
  }
}