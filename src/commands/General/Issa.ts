import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'minato',
            description: 'Displays info about issa.',
            category: 'general',
            usage: `${client.config.prefix}issa`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/issa-logo.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Hey pal!🍃I'm minato, a learner/student & an upcoming developer in the future.
            
📫𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/917863912273

⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/Issa2001

📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://instagram.com/hachiman_oreki

🕸𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢;
(Error)

🚀𝘿𝙞𝙨𝙘𝙤𝙧𝙙;
Namikaze_Minato#2515

⪼𝖲𝖾𝖾 𝗒𝖺𝗁 💘` }
        )
    }
}
