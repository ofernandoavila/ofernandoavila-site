export default function QuickSearchModalContent() {
    return (
        <div className="quick-search-modal">
            <span>Press ESC to close</span>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Select a value to search"/>
                <button className="btn btn-primary"><i className="fa fa-search text-light"></i><span>Search</span></button>
            </div>
        </div>
    );
}