# nestjs

import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

@Controller()
export class AppController {
@Get('/message')
getMessage(): string {
return 'This is the /message endpoint!';
}
}

@Module({
controllers: [AppController],
})
export class AppModule {}

async function bootstrap() {
const app = await NestFactory.create(AppModule);
await app.listen(3000);
}
bootstrap();

Chương 1103 đưa thêm 1 vài chi tiết để giải thích về cách vận hành năng lực của Bonney. Bonney khi sử dụng sức mạnh của mình biến thành Nika, cô đã nói rằng “Mình lại đột nhiên yếu đi “lần nữa”? Tại sao?” Điều này có nghĩa là việc Bonney gặp vấn đề khi biến thành Nika đã xảy ra trước đó. Và theo lời giải thích của Saturn, do Bonney không còn tin vào sự tồn tại của Nika nữa nên sức mạnh của cô cũng từ đó mà giảm sút.
Điều này liên hệ lần nữa với lời giải thích của Vegapunk về Nika và trái Ác Quỷ trong chương 1069, Vegapunk nói rằng vạn vật trên đời này đều đến từ niềm hy vọng, cả Nika lẫn trái Ác Quỷ đều không ngoại lệ. Chỉ cần có người còn tin vào Nika, thì sự tồn tại của Nika mãi mãi không biến mất.
Saturn đã nói sức mạnh Toshi Toshi của Bonney có thể biến một người trở thành hình thái giống với bất kỳ tương lai nào được cho là có thể xảy ra, nhưng một khi tương lai đó được “sáng tỏ”, thì nó sẽ trở thành ưu hoặc nhược điểm. Giải thích cho dễ hiểu, khi một tương lai còn khá mơ hồ và người sử dụng còn chưa hiểu rõ về nó, thì người đó sẽ có thể trở thành phiên bản của tương lai khả dĩ đó. Nhưng một khi biết được “sự thật” rằng tương lai đó sẽ không thể xảy ra, thì lẽ dĩ nhiên sẽ không thể biến thành phiên bản đó.
Năng lực này hoạt động dựa trên suy nghĩ và niềm tin của đối tượng, chứ không đơn thuần hoạt động theo 1 công thức chắc chắn sẽ xảy ra hoặc không. Điều này có cả lợi và hại khi mà nó không phụ thuộc vào sự may rủi của khả năng trong tương lai mà tùy thuộc vào suy nghĩ của đối tượng.
Chính vì vậy mà Saturn đã khéo léo thao túng tâm lý Bonney cực mạnh khi cố nhồi vào đầu cô bé những suy nghĩ về việc Nika không có thật thông qua lời giải thích, và cố làm cô bé tổn thương tinh thần khi kể về những tội ác mà lão đã gây ra cho cả nhà Kuma.
Và lão cũng không quên ngăn chặn vấn đề lớn nhất khi ra lệnh bắt giữ Luffy, bởi một khi mà Luffy khỏe lại và dùng Gear 5 - Nika, thì đó sẽ là viễn cảnh tồi tệ nhất đối với lão. Bonney khi đó sẽ biết Nika thực sự tồn tại và tuyệt chiêu “Tương Lai Méo Mó” sẽ cho ra hình dạng Nika hoàn hảo nhất.
