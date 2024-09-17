import { OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class AppGateway implements OnGatewayConnection {
    server: Server;
    private messages;
    handleMessage(client: Socket, payload: string): void;
    notifyCursoUpdate(cursoId: string, updatedCursoData: any): void;
    handleConnection(client: Socket): void;
}
