import { MessageType, Mimetype } from '@adiwajshing/baileys'

import { join } from 'path'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'asuna',

            description: 'Displays the info.',

            category: 'general',

            usage: `${client.config.prefix}asuna`

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        const n = [

            './assets/images/asuna-logo.jpg'

        ]

        let rin = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,

            mimetype: Mimetype.jpeg,

            caption: `🚀𝖠𝗌𝗎𝗇𝖺 𝖡𝗈𝗍\n\n⚜𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: Maintained fork of void. \n\n🧩𝗛𝗶𝗻𝘁: Asuna is a whatsapp bot created by \n\n⭐ *G𝓮𝓷𝓲𝓾𝓼❥☆:* ✿ Ꮇ Ｉ N Ꭺ Ꭲ Ｏ ✿ \n` }

        )

    }

}
