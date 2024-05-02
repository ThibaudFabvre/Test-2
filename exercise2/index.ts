
import { $ } from 'bun';

const endpoint = `https://sepolia.infura.io/v3/c9f96c89fbc443128ae4d71f1f650aa8`;
const fetchBalance = async (address: string): Promise<bigint> => {
    try {
        
            const requestData = `{"jsonrpc":"2.0","method":"eth_getBalance","params":["${address}", "latest"],"id":1}`;
            const curlCommandResult : any = await $`curl ${endpoint} \
            -X POST \
            -H "Content-Type: application/json" \
            -d '${requestData}'`;

            return BigInt(curlCommandResult.json().result);
    } catch(e){
        throw e
    }
}

fetchBalance("0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE")