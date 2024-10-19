import AboutImg from '../../assets/AboutImg.png';

const Section = () => {
    return (
        <section className="flex flex-col gap-5 p-5 text-center">
            <h1 className='text-4xl font-bold tracking-wide'>ABOUT NAIL</h1>
            <p className="bg-secondary rounded-lg p-3 font-semibold shadow">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum placeat ratione unde. Aliquid architecto cum ducimus error excepturi facere fuga harum, nihil sapiente suscipit! A blanditiis cum cupiditate delectus dolore error et harum hic mollitia nam odio omnis perspiciatis placeat provident reiciendis reprehenderit repudiandae, rerum sint suscipit, tempora velit voluptas!
            </p>
            <img src={AboutImg} alt="" className='rounded aspect-square object-cover'/>
        </section>
    )
}

export default Section;