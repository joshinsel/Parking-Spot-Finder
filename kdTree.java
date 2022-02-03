import java.util.ArrayDeque;

public class kdTree {
	int dimensions = 2;
	Node root;
	Node closest;
	double minDist;
	
	public kdTree() {}
	
	private Node insertNode(Node currentNode, double latitude, double longitude, int depth) {
		if (currentNode == null) {
			return new Node(latitude, longitude);
		}
		
		int cd = depth % dimensions;
		double point[] = new double[] {latitude, longitude};
		
		if (point[cd] < currentNode.point[cd]) {
			currentNode.left = insertNode(currentNode.left, latitude, longitude, depth+1);
		}
		else {
			currentNode.right = insertNode(currentNode.right, latitude, longitude, depth+1);
		}
		
		return currentNode;
	}
	
	public void insert(double latitude, double longitude) {
		root = insertNode(root, latitude, longitude, 0);
	}
	
	private Node minNode(Node x, Node y, Node z, int d) {
		Node res = x;
		if (y != null && y.point[d] < res.point[d]) {
			res = y;
		}
		if (z != null && z.point[d] < res.point[d]) {
			res = z;
		}
		return res;
	}
	
	private Node findMin(Node currentNode, int d, int depth) {
		if (currentNode == null) {
			return null;
		}
		
		int cd = depth % dimensions;
		
		if (cd == d) {
			if (currentNode.left == null) {
				return currentNode;
			}
			return findMin(currentNode.left, d, depth+1);
		}
		
		return minNode(currentNode, findMin(currentNode.left, d, depth+1), 
				findMin(currentNode.right, d, depth+1), d);
	}
	
	private boolean equalPoints(double point1[], double point2[]) {
		return point1[0] == point2[0] && point1[1] == point2[1];
	}
	
	private void copyPoint(double point1[], double point2[]) {
		point1[0] = point2[0];
		point1[1] = point2[1];
	}
	
	private Node deleteNode(Node currentNode, double latitude, double longitude, int depth) {
		if (currentNode == null) {
			return null;
		}
		
		int cd = depth % dimensions;
		double point[] = new double[] {latitude, longitude};
		
		if (equalPoints(currentNode.point, point)) {
			if (currentNode.right != null) {
				Node min = findMin(currentNode.right, cd, 0);
				copyPoint(currentNode.point, min.point);
				currentNode.right = deleteNode(currentNode.right, min.point[0], min.point[1], depth+1);
			}
			else if (currentNode.left != null) {
				Node min = findMin(currentNode.left, cd, 0);
				copyPoint(currentNode.point, min.point);
				currentNode.right = deleteNode(currentNode.left, min.point[0], min.point[1], depth+1);
			}
			else {
				currentNode = null;
			}
			return currentNode;
		}
		
		if (point[cd] < currentNode.point[cd]) {
			currentNode.left = deleteNode(currentNode.left, latitude, longitude, depth+1);
		}
		else {
			currentNode.right = deleteNode(currentNode.right, latitude, longitude, depth+1);
		}
		return currentNode;
	}
	
	public void delete(double latitude, double longitude) {
		root = deleteNode(root, latitude, longitude, 0);
	}
	
	/*
	
	private double distance(double[] point1, double[] point2) {
		double dist = 0.0;
		for (int i = 0; i < 2; i++) {
			dist += Math.pow(point1[i]-point2[i], 2.0);
		}
		return Math.sqrt(dist);
	}
	
	private void nearestNode(Node currentNode, double latitude, double longitude, 
			ArrayDeque<Node> nearestNodes, int depth) {
		if (currentNode == null) {
			return;
		}
		double[] point = new double[] {latitude, longitude};
		if (currentNode.left == null && currentNode.right == null) {
			double dist = distance(point, currentNode.point);
			if (dist < minDist) {
				minDist = dist;
				closest = currentNode;
			}
		}
		else {
			
		}
	}
	
	
	public Node[] findNearest(double latitude, double longitude, int k) {
		ArrayDeque<Node> nearestNodes = new ArrayDeque<>(); //Queue
		minDist = Double.MAX_VALUE;
		
	}
	
	*/
}

class Node {
	double point[];
	Node left, right;
	
	Node(double latitude, double longitude) {
		point = new double[2];
		point[0] = latitude;
		point[1] = longitude;
	}
}