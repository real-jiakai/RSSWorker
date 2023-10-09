// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/app/listener/v1/listener.proto (package bilibili.app.listener.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BKArcDetailsReq, BKArcDetailsResp, ClickReq, ClickResp, CoinAddReq, CoinAddResp, EventReq, EventResp, FavFolderCreateReq, FavFolderCreateResp, FavFolderDeleteReq, FavFolderDeleteResp, FavFolderDetailReq, FavFolderDetailResp, FavFolderListReq, FavFolderListResp, FavItemAddReq, FavItemAddResp, FavItemBatchReq, FavItemBatchResp, FavItemDelReq, FavItemDelResp, FavoredInAnyFoldersReq, FavoredInAnyFoldersResp, FavTabShowReq, FavTabShowResp, MainFavMusicMenuListReq, MainFavMusicMenuListResp, MainFavMusicSubTabListReq, MainFavMusicSubTabListResp, MedialistReq, MedialistResp, MenuDeleteReq, MenuDeleteResp, MenuEditReq, MenuEditResp, MenuSubscribeReq, MenuSubscribeResp, PickCardDetailReq, PickCardDetailResp, PickFeedReq, PickFeedResp, PlayActionReportReq, PlayHistoryAddReq, PlayHistoryDelReq, PlayHistoryReq, PlayHistoryResp, PlaylistAddReq, PlaylistDelReq, PlaylistReq, PlaylistResp, PlayURLReq, PlayURLResp, RcmdPlaylistReq, RcmdPlaylistResp, ThumbUpReq, ThumbUpResp, TripleLikeReq, TripleLikeResp } from "./listener_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * 听视频
 *
 * @generated from service bilibili.app.listener.v1.Listener
 */
export const Listener = {
  typeName: "bilibili.app.listener.v1.Listener",
  methods: {
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.BkarcDetails
     */
    bkarcDetails: {
      name: "BkarcDetails",
      I: BKArcDetailsReq,
      O: BKArcDetailsResp,
      kind: MethodKind.Unary,
    },
    /**
     * 投币
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.CoinAdd
     */
    coinAdd: {
      name: "CoinAdd",
      I: CoinAddReq,
      O: CoinAddResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.Event
     */
    event: {
      name: "Event",
      I: EventReq,
      O: EventResp,
      kind: MethodKind.Unary,
    },
    /**
     * 创建收藏夹
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.FavFolderCreate
     */
    favFolderCreate: {
      name: "FavFolderCreate",
      I: FavFolderCreateReq,
      O: FavFolderCreateResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.FavFolderDelete
     */
    favFolderDelete: {
      name: "FavFolderDelete",
      I: FavFolderDeleteReq,
      O: FavFolderDeleteResp,
      kind: MethodKind.Unary,
    },
    /**
     * 收藏夹详细信息
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.FavFolderDetail
     */
    favFolderDetail: {
      name: "FavFolderDetail",
      I: FavFolderDetailReq,
      O: FavFolderDetailResp,
      kind: MethodKind.Unary,
    },
    /**
     * 用户收藏夹列表
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.FavFolderList
     */
    favFolderList: {
      name: "FavFolderList",
      I: FavFolderListReq,
      O: FavFolderListResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.FavItemAdd
     */
    favItemAdd: {
      name: "FavItemAdd",
      I: FavItemAddReq,
      O: FavItemAddResp,
      kind: MethodKind.Unary,
    },
    /**
     * 批量处理收藏
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.FavItemBatch
     */
    favItemBatch: {
      name: "FavItemBatch",
      I: FavItemBatchReq,
      O: FavItemBatchResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.FavItemDel
     */
    favItemDel: {
      name: "FavItemDel",
      I: FavItemDelReq,
      O: FavItemDelResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.FavoredInAnyFolders
     */
    favoredInAnyFolders: {
      name: "FavoredInAnyFolders",
      I: FavoredInAnyFoldersReq,
      O: FavoredInAnyFoldersResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.Medialist
     */
    medialist: {
      name: "Medialist",
      I: MedialistReq,
      O: MedialistResp,
      kind: MethodKind.Unary,
    },
    /**
     * 每日播单详情
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.PickCardDetail
     */
    pickCardDetail: {
      name: "PickCardDetail",
      I: PickCardDetailReq,
      O: PickCardDetailResp,
      kind: MethodKind.Unary,
    },
    /**
     * 每日播单列表
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.PickFeed
     */
    pickFeed: {
      name: "PickFeed",
      I: PickFeedReq,
      O: PickFeedResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.Ping
     */
    ping: {
      name: "Ping",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * 播放上报
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.PlayActionReport
     */
    playActionReport: {
      name: "PlayActionReport",
      I: PlayActionReportReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.PlayHistory
     */
    playHistory: {
      name: "PlayHistory",
      I: PlayHistoryReq,
      O: PlayHistoryResp,
      kind: MethodKind.Unary,
    },
    /**
     * 添加历史记录
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.PlayHistoryAdd
     */
    playHistoryAdd: {
      name: "PlayHistoryAdd",
      I: PlayHistoryAddReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.PlayHistoryDel
     */
    playHistoryDel: {
      name: "PlayHistoryDel",
      I: PlayHistoryDelReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * 获取音频URL
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.PlayUrl
     */
    playUrl: {
      name: "PlayUrl",
      I: PlayURLReq,
      O: PlayURLResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.Playlist
     */
    playlist: {
      name: "Playlist",
      I: PlaylistReq,
      O: PlaylistResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.PlaylistAdd
     */
    playlistAdd: {
      name: "PlaylistAdd",
      I: PlaylistAddReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Listener.PlaylistDel
     */
    playlistDel: {
      name: "PlaylistDel",
      I: PlaylistDelReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * 推荐列表
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.RcmdPlaylist
     */
    rcmdPlaylist: {
      name: "RcmdPlaylist",
      I: RcmdPlaylistReq,
      O: RcmdPlaylistResp,
      kind: MethodKind.Unary,
    },
    /**
     * 点赞
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.ThumbUp
     */
    thumbUp: {
      name: "ThumbUp",
      I: ThumbUpReq,
      O: ThumbUpResp,
      kind: MethodKind.Unary,
    },
    /**
     * 三联
     *
     * @generated from rpc bilibili.app.listener.v1.Listener.TripleLike
     */
    tripleLike: {
      name: "TripleLike",
      I: TripleLikeReq,
      O: TripleLikeResp,
      kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service bilibili.app.listener.v1.Music
 */
export const Music = {
  typeName: "bilibili.app.listener.v1.Music",
  methods: {
    /**
     * @generated from rpc bilibili.app.listener.v1.Music.Click
     */
    click: {
      name: "Click",
      I: ClickReq,
      O: ClickResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Music.FavTabShow
     */
    favTabShow: {
      name: "FavTabShow",
      I: FavTabShowReq,
      O: FavTabShowResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Music.MainFavMusicMenuList
     */
    mainFavMusicMenuList: {
      name: "MainFavMusicMenuList",
      I: MainFavMusicMenuListReq,
      O: MainFavMusicMenuListResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Music.MainFavMusicSubTabList
     */
    mainFavMusicSubTabList: {
      name: "MainFavMusicSubTabList",
      I: MainFavMusicSubTabListReq,
      O: MainFavMusicSubTabListResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Music.MenuDelete
     */
    menuDelete: {
      name: "MenuDelete",
      I: MenuDeleteReq,
      O: MenuDeleteResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Music.MenuEdit
     */
    menuEdit: {
      name: "MenuEdit",
      I: MenuEditReq,
      O: MenuEditResp,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bilibili.app.listener.v1.Music.MenuSubscribe
     */
    menuSubscribe: {
      name: "MenuSubscribe",
      I: MenuSubscribeReq,
      O: MenuSubscribeResp,
      kind: MethodKind.Unary,
    },
  }
};
