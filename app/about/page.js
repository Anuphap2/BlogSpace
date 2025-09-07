"use client";
import Link from "next/link";
import { FiArrowLeft, FiUsers, FiTarget, FiHeart, FiAward, FiGlobe, FiZap } from "react-icons/fi";

const teamMembers = [
  {
    name: "สมชาย ใจดี",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    description: "ผู้ก่อตั้ง BlogSpace ที่มีประสบการณ์ในวงการเทคโนโลยีมากว่า 10 ปี"
  },
  {
    name: "สายฝน พราวแสง",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
    description: "นักออกแบบ UI/UX ที่เชี่ยวชาญในการสร้างประสบการณ์ผู้ใช้ที่ยอดเยี่ยม"
  },
  {
    name: "อนันต์ ถ่ายภาพ",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    description: "นักพัฒนาซอฟต์แวร์ที่มีความเชี่ยวชาญในเทคโนโลยีสมัยใหม่"
  },
  {
    name: "ธนาคาร แบรนด์",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    description: "ผู้เชี่ยวชาญด้านการตลาดดิจิทัลและการสร้างแบรนด์"
  }
];

const values = [
  {
    icon: FiUsers,
    title: "ชุมชนเป็นศูนย์กลาง",
    description: "เราเชื่อว่าการสร้างชุมชนที่แข็งแกร่งจะช่วยให้บล็อกเกอร์เติบโตและเรียนรู้จากกันและกัน"
  },
  {
    icon: FiTarget,
    title: "มุ่งเน้นคุณภาพ",
    description: "เรามุ่งมั่นในการสร้างเครื่องมือและแพลตฟอร์มที่มีคุณภาพสูง เพื่อให้ผู้ใช้ได้รับประสบการณ์ที่ดีที่สุด"
  },
  {
    icon: FiHeart,
    title: "ใส่ใจผู้ใช้",
    description: "ผู้ใช้คือหัวใจของเรา เราฟังเสียงสะท้อนและพัฒนาต่อเนื่องเพื่อตอบสนองความต้องการ"
  },
  {
    icon: FiZap,
    title: "นวัตกรรม",
    description: "เราไม่หยุดนิ่งในการคิดค้นและพัฒนาฟีเจอร์ใหม่ๆ ที่จะช่วยให้การเขียนบล็อกง่ายและสนุกขึ้น"
  }
];

const milestones = [
  {
    year: "2020",
    title: "ก่อตั้ง BlogSpace",
    description: "เริ่มต้นด้วยความฝันที่จะสร้างแพลตฟอร์มบล็อกที่ดีที่สุดในประเทศไทย"
  },
  {
    year: "2021",
    title: "เปิดตัวเวอร์ชัน 1.0",
    description: "เปิดตัวแพลตฟอร์มพร้อมฟีเจอร์พื้นฐานที่จำเป็นสำหรับการเขียนบล็อก"
  },
  {
    year: "2022",
    title: "10,000 ผู้ใช้",
    description: "บรรลุเป้าหมายผู้ใช้ 10,000 คน และได้รับความไว้วางใจจากบล็อกเกอร์ทั่วประเทศ"
  },
  {
    year: "2023",
    title: "ฟีเจอร์ AI",
    description: "เปิดตัวฟีเจอร์ AI ที่ช่วยในการเขียนและปรับปรุงเนื้อหาให้ดียิ่งขึ้น"
  },
  {
    year: "2024",
    title: "50,000 บทความ",
    description: "มีบทความที่เผยแพร่แล้วมากกว่า 50,000 บทความ และมีผู้อ่านมากกว่า 1 ล้านคนต่อเดือน"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-smooth">
              <FiArrowLeft className="text-lg" />
              กลับหน้าแรก
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-gray-600">
            เรียนรู้เรื่องราวของ BlogSpace และทีมงานที่อยู่เบื้องหลังความสำเร็จ
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                เรื่องราวของเรา
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BlogSpace เริ่มต้นจากความฝันของทีมงานที่ต้องการสร้างแพลตฟอร์มบล็อกที่ดีที่สุดในประเทศไทย 
                  เราเชื่อว่าทุกคนมีเรื่องราวที่น่าสนใจที่ควรได้รับการแบ่งปัน
                </p>
                <p>
                  ตั้งแต่ปี 2020 เราได้พัฒนาฟีเจอร์ต่างๆ อย่างต่อเนื่อง เพื่อให้การเขียนบล็อกเป็นเรื่องง่าย 
                  สนุก และมีประสิทธิภาพ ไม่ว่าจะเป็นเครื่องมือเขียนที่ใช้งานง่าย 
                  ระบบ SEO ที่ดีเยี่ยม หรือชุมชนที่แข็งแกร่ง
                </p>
                <p>
                  วันนี้ BlogSpace เป็นที่ไว้วางใจของบล็อกเกอร์มากกว่า 10,000 คน 
                  และมีบทความที่เผยแพร่แล้วมากกว่า 50,000 บทความ
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                alt="ทีมงาน BlogSpace"
                className="rounded-3xl shadow-apple-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-apple p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">ผู้ใช้ที่ไว้วางใจ</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ค่านิยมของเรา
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              หลักการที่เรายึดถือและนำมาปฏิบัติในการทำงานทุกวัน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-apple hover:shadow-apple-lg transition-smooth border border-gray-100 text-center animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ทีมงานของเรา
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              พบกับทีมงานที่ทุ่มเทและมีความเชี่ยวชาญในแต่ละด้าน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-apple hover:shadow-apple-lg transition-smooth border border-gray-100 text-center animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Journey */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              เส้นทางของเรา
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เรื่องราวการเติบโตและพัฒนาของ BlogSpace ตั้งแต่เริ่มต้นจนถึงวันนี้
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-fade-in-up`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-apple border border-gray-100">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-apple z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              พร้อมเข้าร่วมกับเราแล้วหรือยัง?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              เข้าร่วมกับชุมชนบล็อกเกอร์ที่ใหญ่ที่สุดในประเทศไทย 
              และเริ่มต้นแบ่งปันเรื่องราวของคุณวันนี้
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blogs"
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-smooth shadow-apple hover:shadow-apple-lg transform hover:scale-105"
              >
                เริ่มต้นเขียนบล็อก
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-smooth"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
