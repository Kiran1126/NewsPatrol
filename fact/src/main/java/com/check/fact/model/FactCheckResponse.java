package com.check.fact.model;

import java.util.List;

public class FactCheckResponse {
    private List<Claim> claims;

    public List<Claim> getClaims() {
        return claims;
    }

    public void setClaims(List<Claim> claims) {
        this.claims = claims;
    }

    public static class Claim {
        private String text;
        private List<ClaimReview> claimReview;

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public List<ClaimReview> getClaimReview() {
            return claimReview;
        }

        public void setClaimReview(List<ClaimReview> claimReview) {
            this.claimReview = claimReview;
        }
    }

    public static class ClaimReview {
        private String title;
        private String url;
        private String reviewDate;

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getReviewDate() {
            return reviewDate;
        }

        public void setReviewDate(String reviewDate) {
            this.reviewDate = reviewDate;
        }
    }
}

