

import logger from './logger.js';

class AppError extends Error {
    constructor(message, type, status) {
      super()
      Error.captureStackTrace(this, this.constructor)
      this.name = this.constructor.name
      this.type = type
      this.message = message
      this.status = status
      const stack = this.stack ? this.stack.split('\n') : this.stack
      logger.error({
        error: {
          name: this.name,
          message: this.message,
          type,
          stack: stack && stack.length > 2 ? `${stack[0]}  ${stack[1]}` : stack,
        },
      })
    }
  }

class ValidationError extends AppError {
    constructor(message, errors) {
      super(message || 'Invalid or missing request data.', 'BAD_REQUEST', 400)
      this.errors = errors
    }
}


class ConflictError extends AppError {
  constructor(message) {
    super(
      message || 'The request could not be completed due to a conflict with the current state of the resource.',
      'CONFLICT',
      409,
    )
  }
}

class UnauthorizedError extends AppError {
  constructor(message) {
    super(message || 'Site access denied.', 'UNAUTHORIZED', 401)
  }
}


export default {
  AppError,
  ValidationError,
  ConflictError,
  UnauthorizedError
}
  