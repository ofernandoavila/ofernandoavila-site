export default function QuickSearchModalContent() {
    return (
        <div className="quick-search-modal">
            <span>Press ESC to close</span>
            <div className="input-group">
                <input type="text" className="form-control" />
                <button className="btn btn-primary"><i className="fa fa-search text-light"></i></button>
            </div>
        </div>
    );
}