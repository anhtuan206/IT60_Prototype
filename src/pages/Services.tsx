import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Search, Filter } from 'lucide-react';
export const services = [
    {
      id: '1',
      title: 'Dịch vụ Lưu trú (Khách sạn)',
      price: '200.000 VNĐ/đêm',
      type: 'Chăm sóc cơ bản và chỗ ở',
      image: 'https://www.naruwan-hotel.com.tw/en_new/NewImages/PitArea/img/PitArea%20(2).jpg',
      description: {
        includes: 'Cung cấp phòng/chuồng riêng, nước uống sạch, cho ăn theo lịch và khẩu phần của chủ nuôi (chủ nuôi cung cấp thức ăn), dọn vệ sinh khu vực ở hàng ngày, và giám sát 24/7.',
        duration: 'Theo ngày/đêm (thường tính 24 giờ).',
        requirements: 'Phải được tiêm phòng đầy đủ (có sổ tiêm), khỏe mạnh, không mắc bệnh truyền nhiễm, một số nơi yêu cầu triệt sản đối với chó lớn.',
      },
    },
    {
      id: '2',
      title: 'Dịch vụ Spa & Grooming (Tắm và Cắt tỉa lông)',
      price: '450.000 VNĐ/lần',
      type: 'Chăm sóc ngoại hình và vệ sinh.',
      image: 'https://imageio.forbes.com/blogs-images/keithflamer/files/2019/01/E1D_2438-1200x801.jpg?format=jpg&height=900&width=1600&fit=bounds',
      description: {
        includes: 'Tắm bằng sữa tắm chuyên dụng, sấy khô, chải lông, cắt móng, vệ sinh tai, vắt tuyến hôi, và cắt tỉa lông theo yêu cầu cơ bản hoặc tạo kiểu thẩm mỹ.',
        duration: '1 - 3 giờ (Tùy kích thước và tình trạng lông).',
        requirements: 'Đã được tiêm phòng, không bị ve rận nặng hoặc bệnh ngoài da lây nhiễm (trường hợp này sẽ có dịch vụ đặc trị riêng).',
      },
    },
    {
      id: '3',
      title: 'Dịch vụ Vận động & Vui chơi (Walk & Playtime)',
      price: '100.000 VNĐ/lần',
      type: 'Giải trí và duy trì thể chất.',
      image: 'https://spokanesbestpetsitter.com/wp-content/uploads/2024/12/dog-walker-spokane-wa-1024x575.jpg',
      description: {
        includes: 'Dẫn thú cưng đi dạo ngoài trời (trong khuôn viên an toàn), thời gian chơi đùa với đồ chơi hoặc tương tác với nhân viên chăm sóc, và tương tác xã hội (nếu phù hợp và được sự đồng ý của chủ).',
        duration: '15 - 30 phút/lần, 1-2 lần/ngày.',
        requirements: 'Khỏe mạnh, thân thiện, không hung dữ với người lạ hoặc thú cưng khác.',
      },
    },
    {
      id: '4',
      title: 'Dịch vụ Y tế cơ bản & Cấp cứu',
      price: '70.000 VNĐ/lần khám.',
      type: 'Chăm sóc sức khỏe.',
      image: 'https://www.petangel.com.au/wp-content/uploads/2020/10/Pet-Angel-Blog-2020-12-1080x648.jpg',
      description: {
        includes: 'Kiểm tra sức khỏe hàng ngày, cho thú cưng uống thuốc theo đơn (nếu có), xử lý các vết thương nhỏ, và đưa đi cấp cứu tại phòng khám thú y liên kết trong trường hợp khẩn cấp (có thông báo cho chủ).',
        duration: 'Định kỳ hàng ngày hoặc khi có sự cố.',
        requirements: 'Phải cung cấp đầy đủ lịch sử bệnh lý và thuốc men đang sử dụng (nếu có).',
      },
    },
    {
      id: '5',
      title: 'Dịch vụ Huấn luyện cơ bản (Basic Training)',
      price: '270.000 VNĐ/buổi',
      type: 'Giáo dục hành vi.',
      image: 'https://www.thesprucepets.com/thmb/06APaILRkkQyyC1kXlQoYAoWezw=/2119x0/filters:no_upscale():strip_icc()/here-you-go-human--you-can-have-my-paw-912145654-35ddb8b11c8b4b638dc83e5bb2a013fe.jpg',
      description: {
        includes: 'Dạy các lệnh cơ bản (ngồi, nằm, bắt tay, đi vệ sinh đúng chỗ), chỉnh sửa các thói quen xấu nhỏ (như sủa bậy, cắn đồ). Sử dụng phương pháp huấn luyện tích cực.',
        duration: '30 - 60 phút/buổi. Có thể là gói huấn luyện ngắn hạn trong thời gian lưu trú.',
        requirements: 'Không quá sợ hãi người lạ, có khả năng tập trung cơ bản.',
      },
    },
    {
      id: '6',
      title: 'Dịch vụ Đưa đón (Pet Taxi)',
      price: '15.000 VNĐ/km',
      type: 'Vận chuyển.',
      image: 'https://learn.fetchway.ae/wp-content/uploads/2025/06/taxi-dog-cat-dubai-pet-taxi-feature-image.png',
      description: {
        includes: 'Đưa đón thú cưng từ nhà chủ đến khách sạn và ngược lại bằng xe chuyên dụng, có lồng vận chuyển an toàn và điều hòa.',
        duration: 'Theo lịch hẹn.',
        requirements: 'Phải ở trong lồng/túi vận chuyển hoặc rọ mõm (đối với chó lớn) để đảm bảo an toàn.',
      },
    },
  ];

const Services = () => {
  return <div className="min-h-screen bg-white text-neutral-text flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-neutral-text">Dịch Vụ Của Chúng Tôi</h1>
        {/* Filter/Search Bar */}
        <div className="flex items-center mb-8 bg-accent-beige p-3 rounded-lg shadow-sm">
          <div className="flex items-center border-r border-gray-300 pr-4 mr-4">
            <Filter className="h-5 w-5 mr-2 text-neutral-text" />
            <span className="text-neutral-text">Lọc</span>
          </div>
          <div className="flex-grow flex items-center">
            <Search className="h-5 w-5 mr-2 text-neutral-text" />
            <input type="text" placeholder="Tìm kiếm dịch vụ..." className="bg-transparent outline-none flex-grow text-neutral-text" />
          </div>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => <ServiceCard key={service.id} id={service.id} title={service.title} price={service.price} image={service.image} />)}
        </div>
      </main>
      <Footer />
    </div>;
};
export default Services;