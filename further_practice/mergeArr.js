// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
function merge(nums1, m, nums2, n) {
  m--;
  n--;
  while (m + n >= -1) {
    //If bigger, or nothing left in nums2, copy it over
    if (nums1[m] > nums2[n] || n < 0) {
      nums1[m + n + 1] = nums1[m];
      m--;
    } else {
      nums1[m + n + 1] = nums2[n];
      n--;
    }
  }
}
