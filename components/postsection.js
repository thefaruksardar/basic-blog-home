import image1 from "@/public/image/image1.jpeg";
import image2 from "@/public/image/image2.jpeg";
import image3 from "@/public/image/image3.webp";
import image4 from "@/public/image/image4.jpeg";
import image5 from "@/public/image/image5.jpeg";
import image6 from "@/public/image/image6.jpeg";
import Image from "next/image";

export default function PostSection() {
  const data = [
    {
      title: "Consectetur nemo cupiditate at?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
      date: "21 Jan, 2023",
      author: "Faruk Sardar",
      imageUrl: image1,
    },
    {
      title: "Dignissimos nemo cupiditate nemo?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
      date: "22 Jan, 2023",
      author: "Yasmin Sardar",
      imageUrl: image2,
    },
    {
      title: "Sectetur Aperiam cupiditate dicta?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
      date: "25 Jan, 2023",
      author: "Faruk Sardar",
      imageUrl: image3,
    },
    {
      title: "Consectetur nemo aperiam molestias impedit?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
      date: "28 Jan, 2023",
      author: "Clementine",
      imageUrl: image4,
    },
    {
      title: "Consectetur molestias impedit velit cupiditate enim ?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
      date: "28 Jan, 2023",
      author: "Tenn",
      imageUrl: image5,
    },
    {
      title: "Laboriosam nemo cupiditate nulla alias quae??",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rerum, aperiam magnam dignissimos consectetur nemo cupiditate at distinctio dicta modi?",
      date: "01 Feb, 2023",
      author: "Yasmin Sardar",
      imageUrl: image6,
    },
  ];

  return (
    <section className="py-6 ">
      <div className="md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 max-w-7xl mx-auto">
        {data.map((post) => (
          <div className="bg-white py-3 px-2 rounded-3xl border shadow mb-5">
            <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
            <p className="mb-2">{post.content}</p>
            <Image className="rounded-lg mb-2" src={post.imageUrl} />

            <div className="flex justify-between items-center px-2">
              <p>
                by <span className="font-medium">{post.author}</span>
              </p>
              <p>
                on<span className="font-medium"> {post.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
