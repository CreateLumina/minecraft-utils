import { ValidationError, Validator } from '@createlumina/file-transfer';
import { open } from '@createlumina/unzip';

export class ZipValidator implements Validator {
    async validate(destination: string, url: string): Promise<void> {
        try {
            const file = await open(destination, { autoClose: false, lazyEntries: true });
            file.close();
        } catch (e) {
            throw new ValidationError('InvalidZipError', (e as any).message);
        }
    }
}
