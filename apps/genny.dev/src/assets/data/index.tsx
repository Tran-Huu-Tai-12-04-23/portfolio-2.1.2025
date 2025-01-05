import {
  IconCode,
  IconComponents,
  IconDeviceMobile,
  IconServerBolt,
} from '@tabler/icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

export const InfoData = {
  email: 'huutt201@gmail.com',
  phone: '03761005xx',
};

export const Services: any = [
  {
    title: 'Web Development',
    description:
      'I specialize in building responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.',
    icon: <IconCode stroke={2} />,
  },
  {
    title: 'Mobile Development',
    description:
      'I develop cross-platform mobile applications using React Native, ensuring a seamless user experience across iOS and Android devices.',
    icon: <IconDeviceMobile stroke={2} />,
  },
  {
    title: 'UI/UX Design',
    description:
      'I create visually appealing designs and interactive user interfaces that enhance the overall user experience of a website or application.',
    icon: <IconComponents stroke={2} />,
  },
  {
    title: 'API Development',
    description:
      'I build robust and scalable APIs using Node.js, Express, and MongoDB to ensure seamless communication between the front-end and back-end.',
    icon: <IconServerBolt stroke={2} />,
  },
];

export enum TypeOfProject {
  Web = 'web',
  Mobile = 'mobile',
  UI = 'ui',
  API = 'API',
  All = 'all',
}
export interface IProject {
  id: string;
  name: string;
  img: string;
  lstImg: string[];
  description: string;
  tech: string[];
  linkDemo: string;
  linkGitBackend: string;
  linkGitFrontend: string;
  type: TypeOfProject;
  videoDemo: string;
}
export const projectsData: IProject[] = [
  {
    id: uuidv4(),
    name: 'GETTECH (sale devices: SmartPhone, Laptop, Camera, etc...)',
    img: 'https://uploadthing.com/f/8b9819b2-4496-4066-a3c7-157d861f520f-duogoa.png',
    lstImg: [
      'https://uploadthing.com/f/aee4ec87-2b6e-4742-8e88-87c163d8ea3e-duoiy6.png',
      'https://uploadthing.com/f/56954a13-dd07-46a5-a294-c1e8137640df-duoix5.png',
      'https://uploadthing.com/f/9c56ef93-938b-4f20-898d-755ebe4f3eff-duoivg.png',
      'https://uploadthing.com/f/a28e3e4c-ef5a-4008-8da5-f7de1cb1c352-duokem.png',
      'https://uploadthing.com/f/a8577d21-1e04-43dc-8cba-2b78b2efdbb8-duojlf.png',
      'https://uploadthing.com/f/1f5ffe84-ec18-4870-96f7-a998981d5585-dup0mf.png',
    ],
    description:
      'A full-stack e-commerce website that allows users to browse products, add them to the cart, and make secure payments.Code technologies I got involved with while working on this project.',
    tech: [
      'ReactJs',
      'Payment VN PAY',
      'Java Spring Boot',
      'Firebase',
      'JAVA SERCURITY (JWT)',
    ],
    linkDemo: '',
    linkGitBackend:
      'https://github.com/Tran-Huu-Tai-12-04-23/web_final_java.git',
    type: TypeOfProject.Web,
    linkGitFrontend: '',
    videoDemo:
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/202401011941.mp4?alt=media&amp;token=addcdfac-f162-41b1-b369-61fcc7436337',
  },
  {
    id: uuidv4(),
    name: 'Music app - android studio',
    img: 'https://uploadthing.com/f/c273dcb5-6fd0-40d5-aa5c-fcd2abc6639a-l87kq7.png',
    lstImg: [
      'https://uploadthing.com/f/c273dcb5-6fd0-40d5-aa5c-fcd2abc6639a-l87kq7.png',
      'https://uploadthing.com/f/36689d44-c695-4d32-b861-d94616ca9f2c-8tfxa0.png',
      'https://uploadthing.com/f/f5432b37-e595-446a-bd41-4b8a768df928-8tfy1o.png',
      'https://uploadthing.com/f/9e3a409e-2d4b-4c78-819e-adb186f604b3-8tfyrd.png',
    ],
    description:
      'Đăng nhập và Đăng ký: Spotify yêu cầu người dùng đăng nhập hoặc đăng ký để truy cập vào dịch vụ. Điều này giúp theo dõi danh sách phát cá nhân và âm nhạc yêu thích.  Tìm kiếm và Phát nhạc: Spotify cho phép người dùng tìm kiếm bất kỳ bài hát, album, nghệ sĩ hoặc thể loại nào mà họ muốn nghe. Người dùng có thể chọn bài hát và phát ngay lập tức.  Danh sách phát (Playlists): Spotify cho phép người dùng tạo danh sách phát cá nhân hoặc truy cập vào danh sách phát đã được tạo sẵn. Điều này giúp tổ chức âm nhạc theo các chủ đề hoặc sở thích riêng.  Danh sách nhạc yêu thích: Người dùng có thể đánh dấu bài hát hoặc album yêu thích của họ và thêm vào danh sách nhạc yêu thích để dễ dàng truy cập sau này.  Thư viện âm nhạc cá nhân: Thư viện cho phép người dùng quản lý âm nhạc của họ. Họ có thể tải lên và lưu trữ âm nhạc trong thư viện của mình. 24  Xem Lại Lịch sử Nghe Nhạc: Spotify ghi lại lịch sử nghe nhạc của người dùng, cho phép họ xem lại danh sách bài hát đã nghe gần đây.  Tạo Danh sách Phát Tùy Chỉnh: Người dùng có thể tạo danh sách phát tùy chỉnh bằng cách kéo và thả bài hát vào danh sách phát hoặc chọn tự động thêm bài hát dựa trên sở thích.  Phát Ngẫu Nhiên (Shuffle) và Lặp (Repeat): Spotify cho phép người dùng phát danh sách phát hoặc album theo chế độ phát ngẫu nhiên hoặc lặp lại.  Tính Cá nhân hóa: Spotify sử dụng thông tin về sở thích âm nhạc của người dùng để đề xuất âm nhạc mới và tạo danh sách phát cá nhân.  Nghe Offline: Người dùng có thể tải bài hát về thiết bị của họ để nghe khi không có kết nối internet. Điều này thích hợp cho việc nghe nhạc trên máy bay hoặc trong các khu vực không có kết nối internet.  Chia sẻ và Kết nối Xã hội: Spotify cho phép người dùng chia sẻ bài hát hoặc danh sách phát trên các mạng xã hội và kết nối với bạn bè thông qua tính năng chia sẻ.  Cài đặt Cá nhân: Người dùng có thể tùy chỉnh cài đặt âm thanh, giao diện và bảo mật tài khoản theo sở thích cá nhân.  Hỗ trợ đa thiết bị: Spotify có ứng dụng trên nhiều thiết bị, cho phép người dùng nghe nhạc trên điện thoại di động, máy tính bảng, máy tính, và các thiết bị khác.  Các phiên bản miễn phí và trả phí: Spotify cung cấp phiên bản miễn phí với quảng cáo hoặc phiên bản trả phí loại bỏ quảng cáo và cung cấp các tính năng nâng cao như nghe offline và chất lượng.',
    tech: [
      'Java Spring Boot',
      'Android studio',
      'Firebase',
      'Firebase Authentication',
      'MySql',
      'SqlLite',
    ],
    linkDemo: '',
    linkGitBackend:
      'https://github.com/Tran-Huu-Tai-12-04-23/MUSIC_APP_ANDROID',
    type: TypeOfProject.Mobile,
    linkGitFrontend: '',
    videoDemo:
      'https://firebasestorage.googleapis.com/v0/b/appmapdemo-b2a39.appspot.com/o/202312261300.mp4?alt=media&token=d78d558b-32bd-4c8f-ab8a-07afd4319366',
  },
  {
    id: uuidv4(),
    name: 'AI-Powered Tourism Application for Foreigners in Ho Chi Minh City',
    img: 'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.35.52.png?alt=media&token=003c5a22-8b03-4d0f-acf6-a0c00996c019',
    lstImg: [
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.35.20.png?alt=media&token=bead5438-0f91-46d1-aa23-d2ca15c189f4',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.35.31.png?alt=media&token=0725ba21-9c5b-4e88-b855-267bc7b0f320',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.35.42.png?alt=media&token=6313627d-e63a-4499-8143-9ca8025f2d91',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.35.02.png?alt=media&token=08136f9e-4dbc-47d1-9968-8de67af52605',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.34.50.png?alt=media&token=64bca76f-6661-4ed6-954f-900c4c37830c',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.34.39.png?alt=media&token=0105e075-ba04-419d-83f0-229f64c9043f',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.34.24.png?alt=media&token=a4212127-7c28-4ed8-a3e4-687f122825f3',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.34.09.png?alt=media&token=52513d0d-b108-4822-bba6-f17fabbefdca',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.33.46.png?alt=media&token=c3042091-1d64-414f-b871-5590d2ab23a7',
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenshot%202024-09-28%20at%2022.33.28.png?alt=media&token=ab2b9cce-4ce8-4b01-85bf-34c87ef9ae63',
    ],
    description:
      'Several Large-Scale Challenges Faced by Foreign Travelers in Tourism: Language Barriers Navigation Challenges Cultural Understanding Information Overload. Based on user preferences (interests, available time, budget, etc.), the app generates customized travel itineraries.Allows tourists to share their experiences on social media platforms directly from the app.AI chatbot to assist tourists with inquiries, such as ordering food and handling emergency situations. ',
    tech: [
      'React Native',
      'Nest Js',
      'Firebase',
      'MySql',
      'Flask',
      'Tersorflow',
    ],
    linkDemo: '',
    linkGitBackend:
      'https://github.com/Tran-Huu-Tai-12-04-23/hodos-hackathon-pr',
    type: TypeOfProject.Mobile,
    linkGitFrontend: '',
    videoDemo:
      'https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/hodos-hack%2FScreenRecording_09-27-2024%2009-38-09_1.mov?alt=media&token=43dd82b2-811b-4eb9-bc28-9ef61b108565',
  },
];

export const EDUCATIONS = [
  {
    title: 'Information technology',
    description:
      'This program provides a comprehensive education in the field of information technology, covering essential topics such as programming, database management, network systems, and cybersecurity. Students will gain hands-on experience and develop critical thinking skills to tackle real-world challenges in the tech industry.',
    duration: '2021 - 2025',
    schoolName: 'Ton Duc Thang University',
    address: 'Ho Chi Minh City, Vietnam',
  },
];

export const EXPERIENCE = [
  {
    title: 'Mobile/API Developer',
    companyName: 'Apetech Solution',
    duration: 'Mar. 2024 – Currently',
    responsibilities: [
      'Developed mobile applications while exploring new technologies to enhance app performance and user experience.',
      'Implemented business requirements by designing and optimizing APIs to effectively meet customer needs.',
      'Collaborated with senior developers and cross-functional teams to ensure seamless integration of features.',
      'Continuously learned from industry leaders and peers to refine skills and contribute to team growth.',
    ],
    achievements: [
      'Created innovative mobile applications that improved user engagement and satisfaction.',
      'Drove increased customer retention and loyalty for the company.',
    ],
  },
];

export const skills = {
  work: [
    'React',
    'React Native',
    'Node.js',
    'NestJs',
    'Express',
    'Java Spring',
    'MongoDB',
    'RESTful API',
    'Firebase',
    'Docker',
    'Git',
    'Jira',
  ],
  softSkill: [
    'Time management',
    'Problem-solving',
    'Teamwork',
    'Communication',
    'Research',
  ],
};
