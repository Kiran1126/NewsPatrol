package com.check.fact.model;


import java.util.List;

public class FactCheckResponse {
    private List<Claim> claims;

    // Getters and Setters
    public List<Claim> getClaims() {
        return claims;
    }

    public void setClaims(List<Claim> claims) {
        this.claims = claims;
    }

    public static class Claim {
        private String text;
        private String claimant;
        private String claimDate;
        private String claimReview;

        // Getters and Setters
        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public String getClaimant() {
            return claimant;
        }

        public void setClaimant(String claimant) {
            this.claimant = claimant;
        }

        public String getClaimDate() {
            return claimDate;
        }

        public void setClaimDate(String claimDate) {
            this.claimDate = claimDate;
        }

        public String getClaimReview() {
            return claimReview;
        }

        public void setClaimReview(String claimReview) {
            this.claimReview = claimReview;
        }
    }
}
