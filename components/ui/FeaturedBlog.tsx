import Image from 'next/image'
import Button from '@/components/ui/Button'

interface IPost {
  post: {
    title: string
    body: string
    featureImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
  }
  textLimit: number
}

const FeaturedBlog = ({ post, textLimit }: IPost) => {
  return (
    <div className="w-[1200px] max-md:w-[400px] h-[427px] flex flex-row    items-center justify-center mt-[20px] ml-[83px]  max-md:ml-[50px] max-md:flex-col max-md:justify-center max-md:items-center gap-[30px]  max-md:mt-[10rem]">
      <div className="mt-[20px] ">
        <Image
          className="w-[500px] h-[440px]   mt-[20px] max-md:mr-[54px] max-md:h-[322px] max-md:w-[350px] max-md:mt-[21px] object-cover relative rounded-2xl"
          data-aos="fade-up"
          src={`https:${post.featureImage.fields.file.url}`}
          alt="blog-page-image"
          width={100}
          height={100}
        />
      </div>
      <div className=" max-md:w-[400px]">
        <div
          className="w-[578px] h-[400px] flex-col justify-start items-start gap-4 inline-flex mt-[5px] "
          data-aos="fade-up"
        >
          <div className="text-yellow-400 text-lg font-medium font-['DM Sans'] leading-normal">
            Training
          </div>
          <div className="w-[544px] max-md:w-[350px] max-md:leading-[34px] text-white text-5xl font-bold font-['Raleway'] leading-[60px] max-md:text-[24px]">
            {post.title}
          </div>
          <div className="w-[578px] h-[200px] max-md:w-[350px]  max-md:text-[15px] text-zinc-200 text-base font-medium font-['DM Sans'] leading-normal">
            {post.body.substring(0, textLimit)}...
          </div>
          <Button className="max-md:mt-[5rem]">Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
