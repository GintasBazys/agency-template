const BannerComponent = ({ title }: { title: string }) => {
    return (
        <div className="flex justify-center items-center min-h-[400px] main-banner bg-primary text-center md:px-12 relative w-full bg-cover bg-no-repeat">
            <h1 className="text-4xl lg:text-6xl font-bold text-center px-4 text-gradient z-10 max-w-5xl">
                {title}
            </h1>
        </div>
    );
};

export default BannerComponent;
