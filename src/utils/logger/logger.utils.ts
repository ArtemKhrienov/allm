import config from '../../config';

// Signature of a logging function
interface ILoggerFunc {
  (message?: unknown, ...args: unknown[]): void;
}

// Basic logger interface
interface ILogger {
  log: ILoggerFunc;
  warn: ILoggerFunc;
  error: ILoggerFunc;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
const NO_OP: ILoggerFunc = (message?: unknown, ...args: unknown[]) => {};

// Logger which outputs to the browser console
class ConsoleLogger implements ILogger {
  readonly log: ILoggerFunc;
  readonly warn: ILoggerFunc;
  readonly error: ILoggerFunc;

  constructor(options: { level: string }) {
    const { level } = options;

    this.error = console.error.bind(console);

    if (level == 'ERROR') {
      this.warn = NO_OP;
      this.log = NO_OP;

      return;
    }

    this.warn = console.warn.bind(console);

    if (level == 'WARN') {
      this.log = NO_OP;

      return;
    }

    this.log = console.log.bind(console);
  }
}

export const logger = new ConsoleLogger({
  level: config.env.REACT_APP_LOG_LEVEL || 'ERROR',
});
