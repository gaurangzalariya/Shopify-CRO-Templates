import Image from "next/image";

// --- Product Data (like Shopify JSON) ---
const productData = {
    title: "AirFlex Runner",
    model: "AFR-2025",
    price: 129.99,
    currency: "USD",
    images: [
        "https://picsum.photos/id/1/600",
        "https://picsum.photos/id/2/600",
        "https://picsum.photos/id/3/600",
        "https://picsum.photos/id/4/600",
        "https://picsum.photos/id/5/600",
        "https://picsum.photos/id/6/600",
        "https://picsum.photos/id/7/600",
        "https://picsum.photos/id/8/600",
    ],
    colorSwatches: [
        [
            { src: "https://picsum.photos/id/1/600", label: "Black/White" },
            { src: "https://picsum.photos/id/2/600", label: "Blue/White" },
            { src: "https://picsum.photos/id/3/600", label: "Red/White" },
            { src: "https://picsum.photos/id/4/600", label: "Grey/Orange" },
        ],
        [
            { src: "https://picsum.photos/id/5/600", label: "Pink/White" },
            { src: "https://picsum.photos/id/6/600", label: "Yellow/Black" },
            { src: "https://picsum.photos/id/7/600", label: "Navy/White" },
            { src: "https://picsum.photos/id/8/600", label: "Black/Red" },
        ],
    ],
    sizes: [
        { label: "US 7", available: true },
        { label: "US 8", available: true },
        { label: "US 9", available: true },
        { label: "US 10", available: true },
        { label: "US 11", available: false },
        { label: "US 12", available: true },
    ],
    reviews: [
        {
            name: "Emily Selman",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            date: "2 days ago",
            review:
                "Super comfortable for running and walking. The cushioning is perfect and they look great with any outfit!",
        },
        {
            name: "Michael Foster",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4,
            date: "5 days ago",
            review:
                "Great shoes for daily wear. I use them for gym and casual outings. Would recommend for anyone on their feet a lot.",
        },
        {
            name: "Sarah Williams",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            rating: 5,
            date: "1 week ago",
            review:
                "Absolutely love these runners! Lightweight and breathable, perfect for my morning jogs.",
        },
        {
            name: "Alex Turner",
            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
            rating: 5,
            date: "2 weeks ago",
            review:
                "Stylish and functional. The grip is excellent even on wet surfaces.",
        },
        {
            name: "Jessica Lee",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 4,
            date: "3 weeks ago",
            review:
                "Very light and easy to clean. The fit is true to size.",
        },
        {
            name: "Chris Evans",
            avatar: "https://randomuser.me/api/portraits/men/52.jpg",
            rating: 5,
            date: "1 month ago",
            review:
                "Best running shoes I've owned. My feet don't hurt after long runs anymore.",
        },
        {
            name: "Olivia Brown",
            avatar: "https://randomuser.me/api/portraits/women/22.jpg",
            rating: 5,
            date: "1 month ago",
            review:
                "Great for travel and everyday use. Super flexible and stylish.",
        },
        {
            name: "Daniel Kim",
            avatar: "https://randomuser.me/api/portraits/men/76.jpg",
            rating: 4,
            date: "2 months ago",
            review:
                "Good value for the price. The arch support could be a bit better, but overall very happy.",
        },
        {
            name: "Sophia Martinez",
            avatar: "https://randomuser.me/api/portraits/women/12.jpg",
            rating: 5,
            date: "2 months ago",
            review:
                "Love the color options and the comfort. Will buy another pair soon.",
        },
        {
            name: "James Smith",
            avatar: "https://randomuser.me/api/portraits/men/15.jpg",
            rating: 5,
            date: "3 months ago",
            review:
                "Exceeded my expectations. Durable, lightweight, and look awesome.",
        },
    ],
    rating: 4.7,
    reviewCount: 2143,
    carouselProducts: [
        {
            image: "https://picsum.photos/id/9/400",
            title: "AirFlex Runner Blue",
            price: "$129.99",
        },
        {
            image: "https://picsum.photos/id/10/400",
            title: "AirFlex Runner Red",
            price: "$129.99",
        },
        {
            image: "https://picsum.photos/id/11/400",
            title: "AirFlex Runner Grey",
            price: "$129.99",
        },
    ],
    faqs: [
        {
            question: "Are these shoes suitable for running?",
            answer:
                "Yes! AirFlex Runner shoes are designed for both casual and long-distance running, with advanced cushioning and support.",
        },
        {
            question: "Are they true to size?",
            answer:
                "Yes, most customers find the fit true to size. For wide feet, consider going up half a size.",
        },
        {
            question: "Can I wash them in a machine?",
            answer: "We recommend hand washing with mild soap and air drying for best results.",
        },
        {
            question: "Do they come with a warranty?",
            answer:
                "Yes, all AirFlex shoes come with a 1-year manufacturer warranty against defects.",
        },
    ],
    specs: [
        { label: "Upper Material", value: "Breathable mesh & synthetic overlays" },
        { label: "Sole", value: "Lightweight EVA foam with rubber grip" },
        { label: "Weight", value: "Approx. 250g (size US 9)" },
        { label: "Heel Drop", value: "8mm" },
        { label: "Insole", value: "Removable memory foam" },
        { label: "Warranty", value: "1 year manufacturer warranty" },
    ],
};

// --- Template (uses productData above) ---
export default function ProductShowcase() {
    const {
        title,
        model,
        price,
        images,
        colorSwatches,
        sizes,
        reviews,
        rating,
        reviewCount,
        faqs,
        specs,
        carouselProducts,
    } = productData;

    return (
        <section className="bg-white py-8 px-2 md:px-8 w-full">
            <div className="flex flex-col lg:flex-row gap-10 w-full">
                {/* LEFT: Images, Description, Reviews */}
                <div className="flex-1 min-w-0 w-full">
                    {/* Product Images Grid */}
                    <div className="mb-8 grid grid-cols-2 gap-4">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden"
                            >
                                {/* Breadcrumb over first image */}
                                {i === 0 && (
                                    <nav className="absolute top-2 left-2 z-10 bg-white/80 rounded px-3 py-1 text-xs text-gray-700 font-medium shadow">
                                        <ol className="flex space-x-1">
                                            <li>
                                                <span className="hover:underline cursor-pointer">
                                                    Home
                                                </span>
                                                <span className="mx-1">/</span>
                                            </li>
                                            <li>
                                                <span className="hover:underline cursor-pointer">
                                                    Shoes
                                                </span>
                                                <span className="mx-1">/</span>
                                            </li>
                                            <li className="text-blue-600">{title}</li>
                                        </ol>
                                    </nav>
                                )}
                                {/* "NEW" badge over second image on right */}
                                {i === 1 && (
                                    <span className="absolute top-2 right-2 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                        NEW
                                    </span>
                                )}
                                <Image
                                    src={img}
                                    alt={`Product image ${i + 1}`}
                                    width={600}
                                    height={600}
                                    className="object-cover w-full h-full"
                                    priority={i === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* You Might Also Like Carousel */}
                    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2
                                id="favorites-heading"
                                className="text-2xl font-bold tracking-tight text-gray-900"
                            >
                                You Might Also Like
                            </h2>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
                            {carouselProducts.map((prod, idx) => (
                                <div className="group relative" key={idx}>
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        className="h-72 w-full rounded-lg object-cover group-hover:opacity-75"
                                    />
                                    <h3 className="mt-4 text-base font-semibold text-gray-900">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            {prod.title}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{prod.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQs Section */}
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-28">
                        <div className="mx-auto max-w-4xl">
                            <h3 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">
                                Frequently asked questions
                            </h3>
                            <dl className="mt-16 divide-y divide-gray-900/10">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="py-6 first:pt-0 last:pb-0">
                                        <dt>
                                            <button
                                                type="button"
                                                className="flex w-full items-start justify-between text-left text-gray-900"
                                                aria-controls={`faq-${idx}`}
                                                aria-expanded="false"
                                                onClick={(e) => {
                                                    const btn = e.currentTarget;
                                                    const dd = document.getElementById(`faq-${idx}`);
                                                    if (dd) {
                                                        dd.classList.toggle("hidden");
                                                        btn.setAttribute(
                                                            "aria-expanded",
                                                            dd.classList.contains("hidden") ? "false" : "true"
                                                        );
                                                    }
                                                    const icons = btn.querySelectorAll("svg");
                                                    icons[0].classList.toggle("hidden");
                                                    icons[1].classList.toggle("hidden");
                                                }}
                                            >
                                                <span className="text-base font-semibold">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <svg
                                                        className="size-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 6v12m6-6H6"
                                                        />
                                                    </svg>
                                                    <svg
                                                        className="hidden size-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M18 12H6"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                        <dd className="mt-2 pr-12 hidden" id={`faq-${idx}`}>
                                            <p className="text-base text-gray-600">{faq.answer}</p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Measurements & Specs Section */}
                    <div className="bg-white">
                        <div aria-hidden="true" className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
                                alt=""
                                className="h-96 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white"></div>
                        </div>

                        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Technical Specifications
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    Engineered for runners and everyday athletes, AirFlex Runner shoes combine style, comfort, and durability for all-day performance.
                                </p>
                            </div>

                            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                                {specs.map((spec, idx) => (
                                    <div key={idx} className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">{spec.label}</dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            {spec.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="bg-white mt-16">
                        <h3 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center">
                            What people are saying
                        </h3>
                        <div className="w-full px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
                            {/* Left: Summary & Write Review */}
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                    Customer Reviews
                                </h2>
                                <div className="mt-3 flex items-center">
                                    <div>
                                        <div className="flex items-center">
                                            {[...Array(Math.floor(rating))].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="size-5 shrink-0 text-yellow-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ))}
                                            {rating % 1 !== 0 && (
                                                <svg
                                                    className="size-5 shrink-0 text-yellow-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <defs>
                                                        <linearGradient id="half">
                                                            <stop offset="50%" stopColor="currentColor" />
                                                            <stop offset="50%" stopColor="#d1d5db" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path
                                                        fill="url(#half)"
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="size-5 shrink-0 text-gray-300"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="sr-only">{rating} out of 5 stars</p>
                                    </div>
                                    <p className="ml-2 text-sm text-gray-900">
                                        Based on {reviewCount.toLocaleString()} reviews
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <h3 className="sr-only">Review data</h3>
                                    <dl className="space-y-3">
                                        {/* 5 stars */}
                                        <div className="flex items-center text-sm">
                                            <dt className="flex flex-1 items-center">
                                                <p className="w-3 font-medium text-gray-900">
                                                    5<span className="sr-only"> star reviews</span>
                                                </p>
                                                <div
                                                    aria-hidden="true"
                                                    className="ml-1 flex flex-1 items-center"
                                                >
                                                    <svg
                                                        className="size-5 shrink-0 text-yellow-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <div className="relative ml-3 flex-1">
                                                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                        <div
                                                            style={{ width: "70%" }}
                                                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                        />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="ml-3 w-10 text-right text-sm text-gray-900 tabular-nums">
                                                70%
                                            </dd>
                                        </div>
                                        {/* 4 stars */}
                                        <div className="flex items-center text-sm">
                                            <dt className="flex flex-1 items-center">
                                                <p className="w-3 font-medium text-gray-900">
                                                    4<span className="sr-only"> star reviews</span>
                                                </p>
                                                <div
                                                    aria-hidden="true"
                                                    className="ml-1 flex flex-1 items-center"
                                                >
                                                    <svg
                                                        className="size-5 shrink-0 text-yellow-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <div className="relative ml-3 flex-1">
                                                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                        <div
                                                            style={{ width: "18%" }}
                                                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                        />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="ml-3 w-10 text-right text-sm text-gray-900 tabular-nums">
                                                18%
                                            </dd>
                                        </div>
                                        {/* 3 stars */}
                                        <div className="flex items-center text-sm">
                                            <dt className="flex flex-1 items-center">
                                                <p className="w-3 font-medium text-gray-900">
                                                    3<span className="sr-only"> star reviews</span>
                                                </p>
                                                <div
                                                    aria-hidden="true"
                                                    className="ml-1 flex flex-1 items-center"
                                                >
                                                    <svg
                                                        className="size-5 shrink-0 text-yellow-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <div className="relative ml-3 flex-1">
                                                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                        <div
                                                            style={{ width: "7%" }}
                                                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                        />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="ml-3 w-10 text-right text-sm text-gray-900 tabular-nums">
                                                7%
                                            </dd>
                                        </div>
                                        {/* 2 stars */}
                                        <div className="flex items-center text-sm">
                                            <dt className="flex flex-1 items-center">
                                                <p className="w-3 font-medium text-gray-900">
                                                    2<span className="sr-only"> star reviews</span>
                                                </p>
                                                <div
                                                    aria-hidden="true"
                                                    className="ml-1 flex flex-1 items-center"
                                                >
                                                    <svg
                                                        className="size-5 shrink-0 text-yellow-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <div className="relative ml-3 flex-1">
                                                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                        <div
                                                            style={{ width: "3%" }}
                                                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                        />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="ml-3 w-10 text-right text-sm text-gray-900 tabular-nums">
                                                3%
                                            </dd>
                                        </div>
                                        {/* 1 star */}
                                        <div className="flex items-center text-sm">
                                            <dt className="flex flex-1 items-center">
                                                <p className="w-3 font-medium text-gray-900">
                                                    1<span className="sr-only"> star reviews</span>
                                                </p>
                                                <div
                                                    aria-hidden="true"
                                                    className="ml-1 flex flex-1 items-center"
                                                >
                                                    <svg
                                                        className="size-5 shrink-0 text-yellow-400"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <div className="relative ml-3 flex-1">
                                                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                        <div
                                                            style={{ width: "2%" }}
                                                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                        />
                                                    </div>
                                                </div>
                                            </dt>
                                            <dd className="ml-3 w-10 text-right text-sm text-gray-900 tabular-nums">
                                                2%
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="mt-10">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Share your thoughts
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        If you’ve used this product, share your thoughts with other
                                        customers
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                                    >
                                        Write a review
                                    </a>
                                </div>
                            </div>
                            {/* Right: Reviews List */}
                            <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                                <h3 className="sr-only">Recent reviews</h3>
                                <div className="flow-root">
                                    <div className="-my-12 divide-y divide-gray-200">
                                        {reviews.map((review, idx) => (
                                            <div key={idx} className="py-12">
                                                <div className="flex items-center">
                                                    <img
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        className="size-12 rounded-full"
                                                    />
                                                    <div className="ml-4">
                                                        <h4 className="text-sm font-bold text-gray-900">
                                                            {review.name}
                                                        </h4>
                                                        <div className="mt-1 flex items-center">
                                                            {[...Array(review.rating)].map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className="size-5 shrink-0 text-yellow-400"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            ))}
                                                            {[...Array(5 - review.rating)].map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className="size-5 shrink-0 text-gray-300"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                        <p className="text-xs text-gray-400 mt-1">
                                                            {review.date}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-4 space-y-6 text-base text-gray-600 italic">
                                                    <p>{review.review}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Sticky Product Info & CTA */}
                <div className="flex-1 lg:max-w-lg w-full">
                    <div className="lg:sticky lg:top-8 flex flex-col gap-6 border border-gray-100 rounded-xl p-6 shadow-sm">
                        <div>
                            <div className="text-lg font-semibold text-gray-700 mb-2">
                                {model}
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold mb-1">{title}</h1>
                            {/* Rating below title */}
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-yellow-500 text-lg">
                                    {"★".repeat(Math.round(rating)) +
                                        "☆".repeat(5 - Math.round(rating))}
                                </span>
                                <span className="text-sm text-gray-500">
                                    ({reviewCount.toLocaleString()} reviews)
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-2">
                                ${price.toFixed(2)}
                            </div>
                        </div>
                        {/* Klarna Widget */}
                        <div className="mb-2">
                            <div className="bg-gray-50 border border-gray-200 rounded px-3 py-2 flex items-center gap-2 text-sm text-gray-700">
                                <span>
                                    Pay in 4 interest-free payments of $
                                    {(price / 4).toFixed(2)} with
                                    <span className="font-bold text-purple-700 ml-1">
                                        Klarna
                                    </span>
                                </span>
                                <span className="ml-auto text-xs underline cursor-pointer text-blue-600">
                                    Learn more
                                </span>
                            </div>
                        </div>
                        {/* Color Swatches - 2 rows of image thumbnails */}
                        <div>
                            <div className="font-semibold mb-1">Available Colors</div>
                            <div className="flex flex-col gap-3">
                                {colorSwatches.map((row, rowIdx) => (
                                    <div key={rowIdx} className="flex gap-3">
                                        {row.map((swatch, idx) => (
                                            <button
                                                key={swatch.label + idx}
                                                className="w-[100px] h-[100px] rounded-lg border-2 border-gray-200 hover:border-blue-500 focus:border-blue-500 transition overflow-hidden flex items-center justify-center bg-white"
                                                aria-label={swatch.label}
                                                type="button"
                                            >
                                                <Image
                                                    src={swatch.src}
                                                    alt={swatch.label}
                                                    width={100}
                                                    height={100}
                                                    className="object-cover w-full h-full"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Size Selector */}
                        <div>
                            <label className="block font-semibold mb-1">Size</label>
                            <div className="flex gap-2 flex-wrap">
                                {sizes.map((size) => (
                                    <button
                                        key={size.label}
                                        className={`px-3 py-1 rounded border ${
                                            size.available
                                                ? "border-gray-300 bg-white hover:bg-gray-100"
                                                : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                                        }`}
                                        disabled={!size.available}
                                    >
                                        {size.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Quantity & Add to Cart */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border rounded">
                                <button className="px-3 py-1 text-lg" disabled>
                                    −
                                </button>
                                <input
                                    type="number"
                                    value={1}
                                    min={1}
                                    max={99}
                                    className="w-12 text-center border-0"
                                    readOnly
                                />
                                <button className="px-3 py-1 text-lg">+</button>
                            </div>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                        {/* CRO element below Add to Cart */}
                        <div className="bg-green-50 border border-green-200 rounded px-3 py-2 text-green-800 text-sm flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>
                                Over 1,000 customers purchased this in the last 30 days!
                            </span>
                        </div>
                        {/* Estimate Delivery Form */}
                        <div className="mt-2">
                            <form className="flex flex-col gap-2">
                                <label
                                    htmlFor="zipcode"
                                    className="font-semibold text-sm text-gray-700"
                                >
                                    Estimate Delivery
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        id="zipcode"
                                        name="zipcode"
                                        type="text"
                                        placeholder="Enter ZIP code"
                                        className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition text-sm"
                                    >
                                        Check
                                    </button>
                                </div>
                                <span className="text-xs text-gray-500">
                                    Get estimated delivery date for your area.
                                </span>
                            </form>
                        </div>
                        {/* Trust Badge or Shipping */}
                        <div className="text-xs text-gray-500 mt-2">
                            Free shipping & 30-day returns
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}