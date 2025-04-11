import PuffLoader from "react-spinners/PuffLoader";

export default function dataHandler({loading, error, children}){
    if (loading) {
        return (
            <PuffLoader color="#50806b" margin={2}/>
        )
    }
    if (error) {
        return (
            <>Error: {error}</>
        )
    }

    return children;
}