function PostComponent(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

export default PostComponent