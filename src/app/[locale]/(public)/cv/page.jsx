// app/[locale]/test-data/page.jsx
import { supabase } from "@/lib/supabase-js";

export default async function TestDataPage() {
  // 1. تنفيذ استعلام GET لجلب البيانات من الجدول
  const { data: items, error } = await supabase
    .from("test") // 👈 استبدل "your_table_name" باسم الجدول لديك في Supabase
    .select("*");

  // 2. التعامل مع الأخطاء
  if (error) {
    return <div className="p-4 text-red-500">خطأ: {error.message}</div>;
  }

  // 3. عرض البيانات
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">قائمة البيانات:</h1>
      <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto dir-ltr">
        {JSON.stringify(items, null, 2)}
      </pre>
    </div>
  );
}