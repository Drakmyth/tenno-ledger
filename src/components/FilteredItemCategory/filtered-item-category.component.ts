import { connect } from 'react-redux';
import Items, { Category } from 'warframe-items';
import { AppState, Dispatch } from '../../store/store';
import ItemCategory, { ItemCategoryProps } from '../ItemCategory/item-category.component';

interface FilteredItemCategoryProps {
    title: string;
    category: string;
}

const mapStateToProps = (state: AppState, ownProps: FilteredItemCategoryProps): ItemCategoryProps => {

    const items = new Items({ category: [ownProps.category as Category] });

    return ({
        title: ownProps.title,
        items: items
    });
}

const mapDispatchToProps = (dispatch: Dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ItemCategory);