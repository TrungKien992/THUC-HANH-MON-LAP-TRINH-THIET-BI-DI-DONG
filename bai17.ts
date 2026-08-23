class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    log(message: string): void {
      console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
    }
  }

  const log1 = Logger.getInstance();
  const log2 = Logger.getInstance();
  log1.log("System initialized");
  console.log("Is same instance?", log1 === log2);

  export {};