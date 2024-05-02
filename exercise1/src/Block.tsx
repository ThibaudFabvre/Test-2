import { FC } from "react"




const Block :FC<any> = ({ title, subtitle, currency, balance, walletName, isConnectedToWallet, actionText, onClickConnect, onClickDisconnect }) => {
return (
    <div className="flex flex-col w-[360px]">
        <div className='flex justify-between text-black'>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p>{balance} {currency}</p>
        </div>
            <div className="flex h-[480px] justify-between flex-col items-center border-4 border-black p-4">
                <div className="flex flex-col items-center">
                    <p className="text-black">{subtitle}</p>
                    <input className="text-black p-2 mt-4 w-[260px] border-black border-4" type="text" placeholder="Amount"/>
                    <input className="text-black p-2 mt-4 mb-4 w-[260px] border-black border-4" type="text" placeholder="Address"/>
                </div>
                <button className="w-[160px] bg-blue-200 text-black border-black border-4">{actionText}</button>
            </div>
        {!isConnectedToWallet ? (
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={onClickConnect}>
                Connect {walletName} Wallet
                </button>
            ) : (
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-2" onClick={onClickDisconnect}>
                Disconnect {walletName} Wallet
                </button>
            )}
    </div>
)
}

export default Block