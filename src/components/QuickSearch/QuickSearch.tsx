import useModal from "../modal/hooks/useModal";
import QuickSearchModalContent from "./QuickSearchModalContent";

export default function QuickSearch() {
    const { openModal } = useModal();

    return (
        <div className="quick-search-field" onClick={ e => openModal(<QuickSearchModalContent />)}>
            <i className="fa fa-search"></i>
            <span>Quick search...</span>
        </div>
    );
}