import CommentBox from "./comment-box";
import CommentList from "./comment-list";
interface Prop {
    id: string;
}
const CommentContainer = (props: Prop) => {
    const { id } = props;

    return (
        <div className="flex flex-col p-3 gap-3  bg-cardBackground sm:rounded text-default">
            <div className="flex justify-between w-full">
                <h3 className="font-semibold  mt-[5px]">Bình luận</h3>
                {/* <RefreshIcon className="cursor-pointer" fill={"#ccc"} /> */}
            </div>
            <CommentBox movieId={id} />
            <CommentList movieId={id} />
        </div>
    );
};

export default CommentContainer;
