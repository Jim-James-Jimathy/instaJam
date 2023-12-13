// LOCAL
import PostForm from "@/components/forms/PostForm";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="justify-start w-full max-w-5xl gap-3 flex-start">
          <img
            src="/assets/icons/add-post.svg"
            alt="create new post"
            width={37}
            height={37}
          />
          <h2 className="w-full text-left h3-bold md:h2-bold">Create post</h2>
        </div>
        <PostForm action="Create" />
      </div>
    </div>
  );
};

export default CreatePost;
