import {  gql } from 'graphql-request'

export const CREATE_SITE = gql`
  mutation CreateSite($input: CreateSiteInput!) {
    createSite(input: $input) {
			data{
      title
      domain
      }
    }
  }
`;
export const UPDATE_SITE = gql`
  mutation UpdateSite($_id:ID!, $input: UpdateSiteInput!) {
    updateSite(_id:$_id, input: $input) {
			data{
      title
      domain
      }
    }
  }
`;
export const REMOVE_SITE = gql`
  mutation RemoveSite($_id: ID!) {
    removeSite(_id: $_id)
  }
`;

export const ADD_SECTION_0 = gql`
  mutation AddSection0($_id:ID!, $input: AddSectionInput0!) {
    addSection0(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const UPDATE_SECTION_0 = gql`
  mutation UpdateSection0($_id:ID!, $input: UpdateSectionInput0!) {
    updateSection0(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_SECTION_0 = gql`
  mutation DeleteSection0($_id: ID!, $input: DeleteSectionInput0!) {
    deleteSection0(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;

export const ADD_SECTION_1 = gql`
  mutation AddSection1($_id:ID!, $input: AddSectionInput1!) {
    addSection1(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const ADD_SECTION_2 = gql`
  mutation AddSection2($_id:ID!, $input: AddSectionInput2!) {
    addSection2(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const ADD_SECTION_3 = gql`
  mutation AddSection3($_id:ID!, $input: AddSectionInput3!) {
    addSection3(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const ADD_SECTION_4 = gql`
  mutation AddSection4($_id:ID!, $input: AddSectionInput4!) {
    addSection4(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const ADD_SECTION_5 = gql`
  mutation AddSection5($_id:ID!, $input: AddSectionInput5!) {
    addSection5(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;

export const UPDATE_SECTION_1 = gql`
  mutation UpdateSection1($_id:ID!, $input: UpdateSectionInput1!) {
    updateSection1(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;

export const UPDATE_SECTION_2 = gql`
  mutation UpdateSection2($_id:ID!, $input: UpdateSectionInput2!) {
    updateSection2(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;

export const UPDATE_SECTION_3 = gql`
  mutation UpdateSection3($_id:ID!, $input: UpdateSectionInput3!) {
    updateSection3(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const UPDATE_SECTION_4 = gql`
  mutation UpdateSection4($_id:ID!, $input: UpdateSectionInput4!) {
    updateSection4(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const UPDATE_SECTION_5 = gql`
  mutation UpdateSection5($_id:ID!, $input: UpdateSectionInput5!) {
    updateSection5(_id:$_id, input: $input) {
			data{
      title
      }
    }
  }
`;

export const DELETE_SECTION_1 = gql`
  mutation DeleteSection1($_id: ID!, $input: DeleteSectionInput1!) {
    deleteSection1(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_SECTION_2 = gql`
  mutation DeleteSection2($_id: ID!, $input: DeleteSectionInput2!) {
    deleteSection2(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;


export const DELETE_SECTION_3 = gql`
  mutation DeleteSection3($_id: ID!, $input: DeleteSectionInput3!) {
    deleteSection3(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;


export const DELETE_SECTION_4 = gql`
  mutation DeleteSection4($_id: ID!, $input: DeleteSectionInput4!) {
    deleteSection4(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;

export const DELETE_SECTION_5 = gql`
  mutation DeleteSection5($_id: ID!, $input: DeleteSectionInput5!) {
    deleteSection5(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;


export const ADD_ITEM_1 = gql`
mutation AddItem1($_id:ID!, $input: AddSectionInput1!) {
  addItem1(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_ITEM_2 = gql`
mutation AddItem2($_id:ID!, $input: AddSectionInput2!) {
  addItem2(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_ITEM_3 = gql`
mutation AddItem3($_id:ID!, $input: AddSectionInput3!) {
  addItem3(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_ITEM_4 = gql`
mutation AddItem4($_id:ID!, $input: AddSectionInput4!) {
  addItem4(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_ITEM_5 = gql`
mutation AddItem5($_id:ID!, $input: AddSectionInput5!) {
  addItem5(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const UPDATE_ITEM_1 = gql`
mutation UpdateItem1($_id:ID!, $input: UpdateSectionInput1!) {
  updateItem1(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const UPDATE_ITEM_2 = gql`
mutation UpdateItem2($_id:ID!, $input: UpdateSectionInput2!) {
  updateItem2(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const UPDATE_ITEM_3 = gql`
mutation UpdateItem3($_id:ID!, $input: UpdateSectionInput3!) {
  updateItem3(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const UPDATE_ITEM_4 = gql`
mutation UpdateItem4($_id:ID!, $input: UpdateSectionInput4!) {
  updateItem4(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const UPDATE_ITEM_5 = gql`
mutation UpdateItem5($_id:ID!, $input: UpdateSectionInput5!) {
  updateItem5(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const DELETE_ITEM_1 = gql`
  mutation DeleteItem1($_id: ID!, $input: DeleteSectionInput1!) {
    deleteItem1(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_ITEM_2 = gql`
  mutation DeleteItem2($_id: ID!, $input: DeleteSectionInput2!) {
    deleteItem2(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_ITEM_3 = gql`
  mutation DeleteItem3($_id: ID!, $input: DeleteSectionInput3!) {
    deleteItem3(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_ITEM_4 = gql`
  mutation DeleteItem4($_id: ID!, $input: DeleteSectionInput4!) {
    deleteItem4(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_ITEM_5 = gql`
  mutation DeleteItem5($_id: ID!, $input: DeleteSectionInput5!) {
    deleteItem5(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;

export const ADD_FEATURED_1 = gql`
mutation AddFeatured1($_id:ID!, $input: AddSectionInput1!) {
  addFeatured1(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_FEATURED_2 = gql`
mutation AddFeatured2($_id:ID!, $input: AddSectionInput2!) {
  addFeatured2(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_FEATURED_3 = gql`
mutation AddFeatured3($_id:ID!, $input: AddSectionInput3!) {
  addFeatured3(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_FEATURED_4 = gql`
mutation AddFeatured4($_id:ID!, $input: AddSectionInput4!) {
  addFeatured4(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const ADD_FEATURED_5 = gql`
mutation AddFeatured5($_id:ID!, $input: AddSectionInput5!) {
  addFeatured5(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const UPDATE_FEATURED_1 = gql`
mutation UpdateFeatured1($_id:ID!, $input: UpdateSectionInput1!) {
  updateFeatured1(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const UPDATE_FEATURED_2 = gql`
mutation UpdateFeatured2($_id:ID!, $input: UpdateSectionInput2!) {
  updateFeatured2(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const UPDATE_FEATURED_3 = gql`
mutation UpdateFeatured3($_id:ID!, $input: UpdateSectionInput3!) {
  updateFeatured3(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const UPDATE_FEATURED_4 = gql`
mutation UpdateFeatured4($_id:ID!, $input: UpdateSectionInput4!) {
  updateFeatured4(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;
export const UPDATE_FEATURED_5 = gql`
mutation UpdateFeatured5($_id:ID!, $input: UpdateSectionInput5!) {
  updateFeatured5(_id:$_id, input: $input) {
    data{
    title
    }
  }
}
`;

export const DELETE_FEATURED_1 = gql`
  mutation DeleteFeatured1($_id: ID!, $input: DeleteSectionInput1!) {
    deleteFeatured1(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_FEATURED_2 = gql`
  mutation DeleteFeatured2($_id: ID!, $input: DeleteSectionInput2!) {
    deleteFeatured2(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_FEATURED_3 = gql`
  mutation DeleteFeatured3($_id: ID!, $input: DeleteSectionInput3!) {
    deleteFeatured3(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_FEATURED_4 = gql`
  mutation DeleteFeatured4($_id: ID!, $input: DeleteSectionInput4!) {
    deleteFeatured4(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;
export const DELETE_FEATURED_5 = gql`
  mutation DeleteFeatured5($_id: ID!, $input: DeleteSectionInput5!) {
    deleteFeatured5(_id: $_id, input: $input) {
			data{
      title
      }
    }
  }
`;