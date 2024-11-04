const Page = async ({ params }: { params: { name: string } }) => {
    const { name } = params;

    const [ageRes, genderRes, nationRes] = await Promise.all([
        fetch(`https://api.agify.io/?name=${name}`),
        fetch(`https://api.genderize.io/?name=${name}`),
        fetch(`https://api.nationalize.io/?name=${name}`),
    ]);

    const age = await ageRes.json();
    const gender = await genderRes.json();
    const nation = await nationRes.json();

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-100">
            <div className="max-w-80 w-full p-4 bg-white text-black rounded-lg shadow-xl">
                <h1>Name: {name}</h1>
                <p>Estimated Age: {age.age}</p>
                <p>Gender: {gender.gender}</p>
                <p>Country: {nation.country?.[0]?.country_id || 'Unknown'}</p>
            </div>
        </div>
    );
};

export default Page;
