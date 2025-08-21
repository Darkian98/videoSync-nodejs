import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({
	colorize: true,
	colorizeObjects: true,
});
const loggerPino = pino(stream);
loggerPino.level = 'trace';

export const logger = {
	fatal: function (obj: unknown, msg?: string | undefined, ...args: any[]) {
		loggerPino.fatal(obj ?? msg ?? args);
	},
	error: function (obj: unknown, msg?: string | undefined, ...args: any[]) {
		loggerPino.error(obj ?? msg ?? args);
	},
	warn: function (obj: unknown, msg?: string | undefined, ...args: any[]) {
		loggerPino.warn(obj ?? msg ?? args);
	},
	info: function (obj: unknown, msg?: string | undefined, ...args: any[]) {
		loggerPino.info(obj ?? msg ?? args);
	},
	debug: function (obj: unknown, msg?: string | undefined, ...args: any[]) {
		loggerPino.debug(obj ?? msg ?? args);
	},
	trace: function (obj: unknown, msg?: string | undefined, ...args: any[]) {
		loggerPino.trace(obj ?? msg ?? args);
	},
};
