import { hash, genSalt, compare } from "bcrypt"
export class Utils {

    public async EncryptPassword(passw: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            hash(passw, 10, (err, hash) => {
                if (err) {
                    reject(err); // Manejar cualquier error que ocurra durante el hashing
                } else {
                    resolve(hash); // Devolver el hash resultante
                }
            });
        });
    }

    public async ComparePassword(password: string, passHashed: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            compare(password, passHashed, (err, result) => {
                if (result) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
        })
    }
}


const utils = new Utils();
const prueba = async () => {
    const passHashed = await utils.EncryptPassword("preuba");
    const comparacion = await utils.ComparePassword("prwuba",passHashed);
    console.log(comparacion);
}

prueba();