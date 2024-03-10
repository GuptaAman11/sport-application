import React, { useEffect, useState } from 'react';
import "../../Styles/style.css";
import "../../Styles/demo.css";
import { useGetProfileByUserId } from '../../Hooks/getProfile';
import { useParams } from 'react-router-dom';
import { useFollowUnfollow } from '../../Hooks/useFollow';

const GetProfile = () => {
  const { userId } = useParams();
  
    const { getProfileByUserId, profile ,getUserId} = useGetProfileByUserId(userId);
    const { followUnfollow ,isfollowLoading } = useFollowUnfollow();
  console.log(isfollowLoading)
    const handleFollowUnfollow = async (userID) => {
      console.log("this is useriD", userID)
      console.log(getUserId)
        try {
            await followUnfollow(userID);
        } catch (error) {
            console.error('Failed to follow/unfollow user:', error.message);
        }
    };

    useEffect(() => {
        getProfileByUserId(userId);
    }, [userId , isfollowLoading]);

    return (
        <>
            {profile ? (
                <div>
                    {/* Your profile rendering code here */}
                    <div class="ScriptTop">
                        <div class="rt-container">
                            <div class="col-rt-4" id="float-right"></div>
                        </div>
                    </div>

                    <header class="ScriptHeader">
                        <div class="rt-container">
                            <div class="col-rt-12">
                                <div class="rt-heading">
                                    <h1>Athelete Profile Page Design </h1>
                                    <p>A responsive Athelete profile page design.</p>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section>
                        <div class="rt-container">
                            <div class="col-rt-12">
                                <div class="Scriptcontent">
                                    <div class="student-profile py-4">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="card shadow-sm">
                                                        <div class="card-header bg-transparent text-center">
                                                            <img
                                                                class="profile_img"
                                                                src="https://source.unsplash.com/600x300/?student"
                                                                alt="student dp"
                                                            ></img>
                                                            <h3>Ishmam Ahasan Samin:{profile.name}</h3>
                                                        </div>
                                                        <div class="card-body">
                                                            <p class="mb-0">
                                                                <strong class="pr-1">Athlete location:</strong>
                                                                321000001{profile.city}
                                                            </p>
                                                            <p class="mb-0">
                                                                <strong class="pr-1">
                                                                    Athelete skill level:
                                                                </strong>
                                                                4{profile.skillLevel}
                                                            </p>
                                                            <p class="mb-0">
                                                                <strong class="pr-1">
                                                                    Athelete interested sports:
                                                                </strong>
                                                                A{profile.interestedSports}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="card shadow-sm">
                                                        <div class="card-header bg-transparent border-0">
                                                            <h3 class="mb-0">
                                                                <i class="far fa-clone pr-1"></i>General
                                                                Information
                                                            </h3>
                                                        </div>
                                                        <div class="card-body pt-0">
                                                            <table class="table table-bordered">
                                                                <tr>
                                                                    <th width="30%">Weight</th>
                                                                    <td width="2%">:</td>
                                                                    <td>125</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Height</th>
                                                                    <td width="2%">:</td>
                                                                    <td>2020</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Gender</th>
                                                                    <td width="2%">:</td>
                                                                    <td>Male</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Religion</th>
                                                                    <td width="2%">:</td>
                                                                    <td>Hindu</td>
                                                                </tr>
                                                                <tr>
                                                                    <th width="30%">Country</th>
                                                                    <td width="2%">:</td>
                                                                    <td>India</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div style={{ height: "26px" }}></div>
                                                    <div class="card shadow-sm">
                                                        <div class="card-header bg-transparent border-0">
                                                            <h3 class="mb-0">
                                                                <i class="far fa-clone pr-1"></i>Other Information
                                                            </h3>
                                                        </div>
                                                        <div class="card-body pt-0">
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit, sed do eiusmod tempor incididunt ut labore
                                                                et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation ullamco laboris nisi ut
                                                                aliquip ex ea commodo consequat.
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        {/* Follow/unfollow button */}
                    {isfollowLoading? (
                        <button onClick={() => handleFollowUnfollow(profile.author._id)}>Unfollow</button>
                    ) : (
                        <button onClick={() => handleFollowUnfollow(profile.author._id)}>Follow</button>
                    )}
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default GetProfile;
