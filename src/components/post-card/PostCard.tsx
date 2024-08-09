export default function PostCard() {
    return (
        <div className="post-card">
            <div className="post-meta">
                <div className="meta-language"><span>CSS</span></div>
                <div className="meta-dificulty">
                    <i className="fa fa-award"></i>
                    <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </span>
                </div>
            </div>
            <div className="post-title">Lorem Ipsum Dolor Sit Amet</div>
            <div className="post-excerpt">
                <p>In the realm of technology blogging, captivating your audience goes beyond just the written word. Incorporating eye-catching…</p>
            </div>
            <div className="post-signature">
                <div className="signature-author">
                    <div className="author-avatar"></div>
                    <div className="author-name"><span>Fernando Ávila</span></div>
                </div>
                <div className="signature-readtime"><i className="fa fa-clock"></i> 1 min</div>
            </div>
        </div>
    );
}