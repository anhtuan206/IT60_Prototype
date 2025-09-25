import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';
export const products = [{
  id: '1',
  title: 'Xương Gặm Sạch Răng Bổ Sung Canxi',
  price: '20.000 VNĐ/chiếc',
  category: 'Đồ ăn nhẹ/Bánh thưởng',
  image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/458/454/products/8-1729580571479.jpg?v=1736406843790',
  description: 'Giúp làm sạch mảng bám, mát-xa nướu, bổ sung Canxi giúp xương và răng chắc khỏe. Thích hợp cho chó từ 3 tháng tuổi.',
  specifications: {
    weight: '50g/chiếc',
    size: '10-15 cm (dài)',
    material: 'Tinh bột, Protein thực vật, Canxi, Hương vị tự nhiên',
    origin: 'Trung Quốc/Hàn Quốc/Việt Nam'
  }
}, {
  id: '2',
  title: 'Bát Ăn Tự Động Chống Kiến',
  price: '150.000 VNĐ/bát',
  category: 'Phụ kiện cho ăn uống',
  image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxgtnli5lgbda4',
  description: 'Thiết kế đặc biệt có rãnh chứa nước xung quanh hoặc chân chống kiến, giữ thức ăn khô và sạch sẽ. Thể tích lớn, phù hợp cho thú cưng lưu trú dài ngày.',
  specifications: {
    weight: '150 - 300g',
    size: '15 cm (đường kính), 5-8 cm (cao)',
    material: 'Nhựa PP không độc hại hoặc thép không gỉ',
    origin: 'Trung Quốc/Việt Nam'
  }
}, {
  id: '3',
  title: 'Đồ Chơi Bóng Cao Su Đa Năng (Có chỗ nhét thức ăn)',
  price: '120.000 VNĐ/quả',
  category: 'Đồ chơi giải trí',
  image: 'https://pethouse.com.vn/wp-content/uploads/2022/12/7073e2926eb62045f2fb9eb13a42e123.jpg',
  description: 'Giúp thú cưng tiêu hao năng lượng, giảm căng thẳng, kích thích trí tò mò khi gặm và cố gắng lấy thức ăn/bánh thưởng nhét bên trong. Bền bỉ, khó bị phá hủy.',
  specifications: {
    weight: '100 - 200g',
    size: '5 - 8 cm (đường kính)',
    material: 'Cao su tự nhiên hoặc TPR (Thermoplastic Rubber) không độc hại',
    origin: 'Trung Quốc/Mỹ'
  }
}, {
  id: '4',
  title: 'Dây Dắt Vòng Cổ Phản Quang',
  price: '100.000 VNĐ/bộ',
  category: 'Phụ kiện đi dạo',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQt8Gn5VZ5E3OLjSSk6rQ4kqgJ1IPpdVVl-A&s',
  description: 'Giúp kiểm soát thú cưng khi đi dạo, có dải phản quang an toàn khi dắt đi vào buổi tối hoặc trong khu vực thiếu sáng của khách sạn. Chất liệu nhẹ và bền.',
  specifications: {
    weight: '50 - 100g',
    size: 'Dây dài 1.2 - 1.5m, bản rộng 1-2.5cm (tùy size)',
    material: 'Nylon/Polyester, Khóa kim loại không gỉ',
    origin: 'Trung Quốc/Hàn Quốc'
  }
}, {
  id: '5',
  title: 'Khăn Tắm Siêu Thấm Hút',
  price: '50.000VNĐ/cái',
  category: 'Dụng cụ vệ sinh & Spa',
  image: 'https://paddy.vn/cdn/shop/files/khan-tam-cho-meo-sieu-tham-hut.jpg?v=1692494975',
  description: 'Chuyên dùng sau khi tắm hoặc bơi, khả năng thấm nước cực nhanh, giúp rút ngắn thời gian sấy lông và tránh thú cưng bị cảm lạnh.',
  specifications: {
    weight: '150 - 300g',
    size: '30x60 cm hoặc 60x100 cm',
    material: 'Sợi Microfiber siêu mịn hoặc PVA',
    origin: 'Trung Quốc/Việt Nam'
  }
}, {
  id: '6',
  title: 'Xịt Khử Mùi & Khử Trùng Chuồng Nuôi (Pet-Safe)',
  price: '200.000 VNĐ/chai',
  category: 'Sản phẩm vệ sinh',
  image: 'https://fuwa.com.vn/wp-content/uploads/2024/02/xit-khu-mui-da-nang-31.jpg',
  description: 'Công thức an toàn, giúp loại bỏ mùi hôi, vi khuẩn và nấm mốc trong khu vực chuồng/phòng lưu trú, đảm bảo môi trường sạch sẽ, không gây kích ứng da hoặc hô hấp cho thú cưng.',
  specifications: {
    weight: '300g - 500g (Dung tích 250ml - 450ml)',
    size: 'Dạng chai xịt',
    material: 'Dung dịch chứa Ion bạc, tinh dầu thiên nhiên (oải hương/bạc hà), không cồn, không Paraben',
    origin: 'Thái Lan/Việt Nam/Nhật Bản'
  }
}, {
  id: '7',
  title: 'Tã Bỉm Vệ Sinh Dùng Một Lần',
  price: '10.000 VNĐ/miếng',
  category: 'Dụng cụ vệ sinh',
  image: 'https://thuythithi.com/wp-content/uploads/2022/09/ta-bim-danh-cho-cho-ban-da-tung-biet-den-chua.jpg',
  description: 'Thường dùng cho thú cưng còn nhỏ, đang huấn luyện đi vệ sinh, hoặc thú cưng lớn tuổi/đang bệnh lý không kiểm soát được. Giúp giữ vệ sinh khu vực lưu trú.',
  specifications: {
    weight: '10 - 50g/miếng (Tùy size)',
    size: 'Size S (33x45cm), Size M (45x60cm)',
    material: 'Lớp thấm hút Polymer, chống rò rỉ PE',
    origin: 'Trung Quốc/Nhật Bản'
  }
}, {
  id: '8',
  title: 'Lược Chải Lông Chuyên Dụng (Loại gỡ rối/Massage)',
  price: '80.000 VNĐ/cái',
  category: 'Dụng cụ vệ sinh & Spa',
  image: 'https://phuloc.com.vn/uploads/blog/luoc-go-roi-umi.jpg',
  description: 'Giúp loại bỏ lông rụng, gỡ rối lông, kích thích lưu thông máu dưới da, mang lại cảm giác dễ chịu cho thú cưng trong thời gian lưu trú.',
  specifications: {
    weight: '50 - 150g',
    size: '15 - 20 cm (dài)',
    material: 'Tay cầm nhựa/gỗ, Lưỡi lược thép không gỉ hoặc răng cao su/silicon',
    origin: 'Trung Quốc/Hàn Quốc'
  }
}];
const Products = () => {
  return <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-neutral-text">Sản Phẩm Của Chúng Tôi</h1>
        {/* Filter/Search Bar */}
        <div className="flex items-center mb-8 bg-accent-beige p-3 rounded-lg shadow-sm">
          <div className="flex items-center border-r border-gray-300 pr-4 mr-4">
            <Filter className="h-5 w-5 mr-2 text-neutral-text" />
            <span className="text-neutral-text">Lọc</span>
          </div>
          <div className="flex-grow flex items-center">
            <Search className="h-5 w-5 mr-2 text-neutral-text" />
            <input type="text" placeholder="Tìm kiếm sản phẩm..." className="bg-transparent outline-none flex-grow text-neutral-text" />
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />)}
        </div>
      </main>
      <Footer />
    </div>;
};
export default Products;