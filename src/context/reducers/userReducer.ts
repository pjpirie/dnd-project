interface IUserDetails {
  username: string;
  joinedDate: any;
}

export interface IUserState {
  details: IUserDetails;
}

export enum UserActions {
  LOGIN = "user_action_login",
}

interface UserActionType {
  type: UserActions | string;
  payload: any;
}

const initialUserState = {
  details: {
    username: "",
    joinedDate: "",
  },
};

const userReducer = (
  state = initialUserState,
  action: UserActionType
): IUserState => {
  switch (action.type) {
    case UserActions.LOGIN:
      return state;

    default:
      throw Error(`[DND] ReducerError: no action for ${action.type}.`);
  }
};

export default userReducer;
