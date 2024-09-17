import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayConnection
{
  @WebSocketServer() server: Server;
  private messages: { message: string; clientId: string }[] = [];

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
    const messageData = { message: payload, clientId: client.id };
    this.messages.push(messageData)
    this.server.emit('msgToClient', payload, client.id);
  }

  notifyCursoUpdate(cursoId: string, updatedCursoData: any) {
    this.server.emit('cursoUpdated', {cursoId, updatedCursoData})
  }

  handleConnection(client: Socket) {
    client.emit('previousMessages', this.messages);
  }
}
