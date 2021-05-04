package com.miage.garticphone.model.bo;

import java.util.ArrayList;
import java.util.UUID;

public class GameBO {

    private static final Integer MAX_PLAYERS = 10;

    private UUID id;

    private UserBO creator;

    private final ArrayList<UserBO> users = new ArrayList<>();

    private boolean hasUser(UserBO toCheck) {
        return users.contains(toCheck);
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getId() {
        return id;
    }

    public UserBO getCreator() {
        return creator;
    }

    public void setCreator(UserBO creator) {
        this.creator = creator;
    }

    public ArrayList<UserBO> getUsers() {
        return users;
    }

    public boolean addUser(UserBO toAdd) {
        if (!hasUser(toAdd) && users.size() < MAX_PLAYERS) {
            users.add(toAdd);
            return true;
        }
        return false;
    }

    public boolean removeUser(UserBO toRemove) {
        if (hasUser(toRemove)) {
            users.remove(toRemove);
            return true;
        }
        return false;
    }

    public void setUsers(ArrayList<UserBO> users) {
        for (UserBO user : users) {
            addUser(user);
        }
    }
}
