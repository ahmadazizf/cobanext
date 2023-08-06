import { Inter } from 'next/font/google'
import { getAllAccount, getSelectedAccount } from '@/api/services'
import Image from 'next/image';
import Custom404 from './404Error';

const inter = Inter({ subsets: ['latin'] })


export default function SlugPage({ data }) {
    console.log('datass', data);
    if (data.attributes.links.data[0]?.attributes.status === 'deactive') {
        return (
            <Custom404 />
        )
    }
    return (
        <main
            className={`flex min-h-screen flex-col max-w-2xl m-auto items-center pt-24 p-4 ${inter.className}`}
        >
            <div className='relative w-[150px] h-[150px] rounded-full overflow-hidden mb-5'>
                <Image
                    className='relative'
                    layout='fill'
                    objectFit='cover'
                    src={`${process.env.NEXT_PUBLIC_ASSET_URL}${data.attributes.photo.data.attributes.url}`}
                    alt={data.attributes.fullname}
                />
            </div>
            <div className='flex flex-col items-center gap-2 w-full mb-12'>
                <p>{data.attributes.links.data[0]?.attributes.status === 'suspend' ? 'Akun Telah Disuspend' : ''}</p>
                <h3 className='text-2xl font-bold'>{data.attributes.fullname}</h3>
                <p className='text-lg'>{data.attributes.bio}</p>
            </div>
            <div
                className='flex flex-col items-center gap-8 w-full'

            >
                {data.attributes.links.data.map((res, i) => {
                    if (res.attributes.status !== 'active') {
                        return (
                            <a
                                key={i}
                                // href={res.attributes.url}
                                // target='_blank'
                                // rel='noopener noreferrer'
                                className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter
                             backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-not-allowed '
                            >
                                {res.attributes.title}
                            </a>
                        )
                    }
                    if (res.attributes.status === 'active') {
                        return (
                            <a
                                key={i}
                                href={res.attributes.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='h-full w-full bg-gray-400 rounded-[24px] bg-clip-padding backdrop-filter
                                 backdrop-blur-sm bg-opacity-10 p-4 hover:scale-105 transition-all cursor-pointer '
                            >
                                {res.attributes.title}
                            </a>
                        )
                    }
                })}
            </div>
        </main>
    )
}
// getStaticPaths adalah function yang nanti akan diexecute oleh next.js ketika project di build
// yang fungsinya untuk menghasilkan file .html apa saja berdasarkan dynamic routes nya
export async function getStaticPaths() {
    const accounts = await getAllAccount();
    const dataAccounts = await accounts.data.data;

    const paths = dataAccounts.map((value) => {
        return {
            params: { slug: value.attributes.slug },
        };
    });

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    console.log('get selectedacc', params);
    const selectedAccount = await getSelectedAccount(params.slug);
    return {
        props: {
            data: selectedAccount.data.data[0],
        },
        revalidate: 10,
    };
}