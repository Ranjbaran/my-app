// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>اپلیکیشن من با نکست جی‌اس</title>
        <meta name="description" content="صفحه اصلی اپلیکیشن من با نکست جی‌اس" />
      </Head>

      {/* هدر */}
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">لوگو من</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-blue-500">خانه</a>
            <a href="#" className="hover:text-blue-500">درباره ما</a>
            <a href="#" className="hover:text-blue-500">خدمات</a>
            <a href="#" className="hover:text-blue-500">تماس با ما</a>
          </nav>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            شروع کنید
          </button>
        </div>
      </header> */}

      {/* بخش اصلی (Hero) */}
      <section className="flex-1 bg-gray-100 flex flex-col justify-center items-center text-center p-12">
        <h2 className="text-4xl font-bold mb-4">به پلتفرم ما خوش آمدید</h2>
        <p className="text-lg mb-6 max-w-xl">
          ما راه‌حل‌های شگفت‌انگیزی برای رشد کسب‌وکار شما ارائه می‌کنیم. همین امروز به ما بپیوندید و تفاوت را تجربه کنید.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          شروع کنید
        </button>
      </section>

      {/* بخش ویژگی‌ها */}
      <section className="py-12 bg-white">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-bold mb-2">عملکرد سریع</h3>
            <p>پلتفرم ما برای سرعت و قابلیت اطمینان بهینه شده است.</p>
          </div>
          <div className="p-6 border rounded-lg text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-bold mb-2">امنیت بالا</h3>
            <p>داده‌های شما با بالاترین استانداردهای امنیتی محافظت می‌شوند.</p>
          </div>
          <div className="p-6 border rounded-lg text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="font-bold mb-2">نوآورانه</h3>
            <p>ما راه‌حل‌های خلاقانه برای رشد کسب‌وکار شما ارائه می‌دهیم.</p>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-gray-800 text-white py-8 rounded-md p-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 اپلیکیشن من با نکست جی‌اس. کلیه حقوق محفوظ است.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">توییتر</a>
            <a href="#" className="hover:text-blue-400">فیسبوک</a>
            <a href="#" className="hover:text-blue-400">لینکدین</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
